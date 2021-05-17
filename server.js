const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rajenpk:Mapr4567@prawin-1pj0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.get('/timestamp', (req, res) => {
  client.connect(err => {
    collection = client.db("Profile").collection("personaldetails");
    collection.find({}).toArray((error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
      res.send(result);
    });
  });
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: 'prawinmeetme@gmail.com',
    pass: 'rpksharaj*89',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


app.post("/send", (req, res) => {
  console.log('req mail', req.body);
  console.log('req params', req.params);
  // console.log('request', req);
  //2. You can configure the object however you want
  const html = "<b>" + req.body.name + "</b>";
  const mailOptions = {
    from: "prawinmeetme@gmail.com",
    to: "prawinmeetme@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: html
  };

  //3.
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
  });
});

app.listen(process.env.PORT || 8000, () => { console.log('server running'); })