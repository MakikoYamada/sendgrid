import { NextResponse } from "next/server";
// import { MailDataRequired } from "@sendgrid/helpers/classes/mail";

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey("SG.****"); //SendGridのAPIキー

  const msg = {
    to: data.email,
    from: "support@example.com",
    subject: "お問合せありがとうございました。",
    text: "お問合せを受け付けました。回答をお待ちください。" + data.message,
    // html: "お問合せを受け付けました。回答をお待ちください。" + req.body.message,
  };

  const res = sgMail.send(msg);
  return NextResponse.json(res);
}
