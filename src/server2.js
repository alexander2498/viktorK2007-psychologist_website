const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

var server = express();

server.use(cors()); 
server.use(express.static(path.join(__dirname, 'build')));
server.use(express.json());

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.post("/api/feedback", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "ap.artatelier.ru@mail.ru",
        pass: "rYUjqdtM05q9K3dd17JH",
      },
    });

    const { email, comment, name, phone } = req.body;
    const mail = {
      from: "ap.artatelier.ru@mail.ru",
      to: "ap.artatelier.ru@mail.ru",
      subject: "This letter was sent by nodemailer",
      text: `Name: ${name}\nMessage: ${comment}\nEmail: ${email}\nPhone: ${phone}`,
    };

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    await transporter.sendMail(mail);
    return res.status(200).send({
    });
  } catch (e) {
    return res.status(500).send({
      status: 500,
      message: "error",
    });
  }
});

server.listen(3001, () => {
  console.log("listening on port 3001");
});
