import nodemailer from "nodemailer";

export async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  // Configure the transporter with Gmail OAuth2
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SMTP_USER,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN, // optional, can be omitted
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER, // your email
    subject: `New Contact Form Submission from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}
