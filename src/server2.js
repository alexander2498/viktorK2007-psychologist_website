const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

var server = express();

server.use(cors()); 
server.use(express.static(path.join(__dirname, "public")));
server.use(express.json());

server.get("/", (req, res, next) => {
  res.send("This is the get request");
});

server.post("/api/feedback", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "form_test@inbox.ru",
        pass: "0CtJ69jtVHuPDexJwxX2",
      },
    });

    const { email, comment, name, phone } = req.body;
    const mail = {
      from: "form_test@inbox.ru",
      to: "ivanzagorin6@gmail.com",
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
