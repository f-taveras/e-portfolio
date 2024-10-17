const http = require('http');
const nodemailer = require('nodemailer');

// Set up email transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create server
const server = http.createServer((req, res) => {
  if (req.url === '/contact') {
    // Handle contact form submission here
    const mailOptions = {
      from: req.body.email,
      to: EMAIL_USER,
      subject: `New message from ${req.body.firstname} 
${req.body.lastname}`,
      text: `Service: ${req.body.service}\nPhone: 
${req.body.phonenumber}\nEmail: 
${req.body.email}\n\nMessage:\n${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent successfully!');
      }
    });
  } else {
    // Handle other routes here
    res.send('Not found');
  }
});

// Start server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
