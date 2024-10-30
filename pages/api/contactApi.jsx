import nodemailer from 'nodemailer';

const USER = process.env.MAILGUN_USER
const PASS = process.env.MAILGUN_PASS

export default function handler(req, res) {

  const { name, lastname, email, message, phone, service } = req.body

  const mailContent = `Name: ${name} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`

  console.log(req.body)
  // res.status(200).json({ message: 'Hello from Next.js!' })


  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false, // use false for STARTTLS; true for SSL on port 465
    auth: {
      user: USER,
      pass: PASS,
    }
  });

  // Configure the mailoptions object
  const mailOptions = {
    from: 'contact@email.prtflio.info',
    to: 'felixataveras1@gmail.com',
    subject: 'Contact Form Allert!',
    text: mailContent
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      return res.status(500).json({ status: 'error', message: 'Failed to send email due to server error.' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({
        status: 'success',
        message: 'Email successfully sent'
      });
    }
  });
}