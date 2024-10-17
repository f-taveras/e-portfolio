import nodemailer from 'nodemailer';


export default function handler(req, res) {

    console.log(req.body)
    res.status(200).json({ message: 'Hello from Next.js!' })
    
    
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false, // use false for STARTTLS; true for SSL on port 465
      auth: {
        user: 'postmaster@email.prtflio.info',
        pass: "abc61ba58d1b27059234fa11fc89eec3-d010bdaf-68f9805c",
      }
    });
    
    // Configure the mailoptions object
    const mailOptions = {
      from: 'felix@email.prtflio.info',
      to: 'felixataveras1@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error, info) =>{
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