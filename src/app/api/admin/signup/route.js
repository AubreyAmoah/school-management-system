import connect from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(req) {
  const startsWithAlphabetRegex = /^[A-Za-z]/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const complexPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  function isComplexPassword(word) {
    return complexPasswordRegex.test(word);
  }

  function validateEmail(word) {
    return emailRegex.test(word);
  }

  function startsWithAlphabet(word) {
    return startsWithAlphabetRegex.test(word);
  }
  try {
    const body = await req.json();
    const { firstname, lastname, email, password, repeatpassword } = body;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    if (!firstname) {
      return NextResponse.json(
        { error: "firstname required" },
        { status: 400 }
      );
    }

    if (!startsWithAlphabet(firstname)) {
      return NextResponse.json(
        { error: "firstname should start with an alphabet" },
        { status: 400 }
      );
    }

    if (firstname.length < 2) {
      return NextResponse.json(
        { error: "first name does not meet required length" },
        { status: 400 }
      );
    }

    if (!lastname) {
      return NextResponse.json({ error: "lastname required" }, { status: 400 });
    }

    if (lastname.length < 2) {
      return NextResponse.json(
        { error: "last name does not meet required length" },
        { status: 400 }
      );
    }

    if (!startsWithAlphabet(lastname)) {
      return NextResponse.json(
        { error: "lastname should start with an alphabet" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "not a valid email" }, { status: 400 });
    }

    if (!password) {
      return NextResponse.json({ error: "password required" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "password should be six or more characters" },
        { status: 400 }
      );
    }

    // if (!isComplexPassword(password)) {
    //   return NextResponse.json(
    //     {
    //       error:
    //         "password should contain at least an uppercase, lowercase alphabet digit and special character",
    //     },
    //     { status: 400 }
    //   );
    // }

    if (!repeatpassword) {
      return NextResponse.json(
        { error: "repeat password required" },
        { status: 400 }
      );
    }

    if (password !== repeatpassword) {
      return NextResponse.json(
        { error: "passwords do not match" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname: firstname.toLowerCase().trim(),
      lastname: lastname.toLowerCase().trim(),
      email: email.trim(),
      password: hashedPassword,
      isAdmin: true,
    });

    const savedUser = await newUser.save();

    await sendEmail({
      email,
      emailType: process.env.EMAIL_VERIFY,
      userId: savedUser._id,
    });

    return NextResponse.json({
      message: "User created succesfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
