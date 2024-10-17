import nodemailer from 'nodemailer';


export default function handler(req, res) {

    console.log(req.body)
    res.status(200).json({ message: 'Hello from Next.js!' })
    
    
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: true, // use false for STARTTLS; true for SSL on port 465
      auth: {
        user: 'postmaster@sandbox4893267c00ed4faa81fc8e41eb4cafdb.mailgun.org',
        pass: "935c194c10e1177eb8da5a123b77f637-d010bdaf-6d11be9e",
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