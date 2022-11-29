const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

async function sendMail() {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: "ukucher@gmail.com",
    from: "ukucher@gmail.com",
    subject: "Test Sending email with SendGrid",
    text: "Helo from Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const response = await sgMail.send(msg);
  console.log("Email sent", response);
}

sendMail().catch((error) => {
  console.error(error);
});
