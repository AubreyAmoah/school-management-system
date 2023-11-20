import connect from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const res = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    res.cookies.set("token", token, {
      httpOnly: true,
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
