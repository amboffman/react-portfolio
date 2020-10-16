const express = require("express");
require("dotenv").config();
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");
const transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  let name = req.body.firstName + ' ' + req.body.lastName;
  let email = req.body.email;
  let phone = req.body.phoneNumber;
  let company = req.body.company;
  let animal = req.body.favoriteAnimal;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n phone: ${phone} \n company: ${company} \n animal: ${animal} \n message: \n ${message} `;

  let mail = {
    from: name,
    to: "amarrokalboffman@gmail.com",
    subject: `Portfolio - ${name}`,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ status: "fail" });
    } else {
      res.json({ status: "success" });
    }
  });
});
const port = process.env.PORT || 5000;
const app = express();
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});