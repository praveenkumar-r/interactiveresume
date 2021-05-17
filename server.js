const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rajenpk:Mapr4567@prawin-1pj0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static('public'));

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
  host: "gmail", //replace with your email provider
  port: 587,
  auth: {
    user: 'rpk.sharaj@gmail.com',
    pass: 'rpksharaj89',
  },
});


app.post("/send", (req, res) => {
  //2. You can configure the object however you want
  const mailOptions = {
    from: "rpk.sharaj@gmail.com",
    to: "rpk.sharaj@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
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