import nodemailer from "nodemailer";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    // create a hashed token
    const hashToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      user: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "login",
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // var transport = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: "743984a1a474a2",
    //     pass: "1d5477a99b615d",
    //   },
    // });

    const mailOptions = {
      from: process.SMTP_EMAIL,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href=${
        process.env.domain
      }/verifyemail?token=${hashToken}>here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
      or copy the link below in your browser. <br>${
        process.env.domain
      }/verifyemail?token=${hashToken}</p>`,
    };

    transport
      .sendMail(mailOptions)
      .then((mailresponse) => {
        return mailresponse;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    throw new Error(error.message);
  }
};
