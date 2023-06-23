import nodemailer from 'nodemailer';
import { config } from '../config/config';

const user = config.NODEMAIL_EMAIL as string;
const pass = config.NODEMAIL_PASS as string;

const transport = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  tls: { ciphers: 'SSLv3', rejectUnauthorized: true },
  auth: {
    user,
    pass,
  },
});

export const sendConfirmationEmail = async (
  name: string,
  email: string,
  confirmationCode: string,
) => {
  console.log('Check');

  if (config.NODE_ENV === 'production') {
    const url = `https://landscapeshop.onrender.com/users/confirmation/${confirmationCode}`;

    await transport
      .sendMail({
        from: user,
        to: email,
        subject: 'Please confirm your account',
        html: `<h1>Email Confirmation</h1>
    <h2>Hello ${name} </h2>
    <p> Thank you for subscribing. Please confirm your email by clicking on the following link </p>
    <a href=${url}> Click here </a> </div>`,
      })
      .catch((err) => console.log(err));
  } else {
    console.log(confirmationCode);
  }
};
