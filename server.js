const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const cors = require('cors');
const uri = "mongodb+srv://rajenpk:Mapr4567@prawin-1pj0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
const nodemailer = require("nodemailer");
const app = express();
const replyEmail = [];
app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json());

app.use(cors());

var clientDB = "";
var collection;

app.get('/timestamp', (req, res) => {
  client.connect(err => {
    collection = clientDB.collection("personaldetails");
    collection.find({}).toArray((error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
      res.send(result);
    });
  });
});

app.post('/feedback', (req, res) => {
  console.log('myobj', req.body.item);
  collection.insertOne(req.body.item, (err, result) => {
    if (err)
      return response.status(500).send(err);
    console.log("1 document inserted");
    res.send(result.result);
    const mailOptions = {
      from: mailData.email,
      to: mailData.email,
      subject: 'Thanks for your feedback!!!',
      generateTextFromHTML: true,
      html: `Hi ${mailData.name}, <br/><br/> 
            Thank you for your valuable feedback !!!<br/><br/>
            Looking forward to talking to you soon!<br/><br/>
            Thanks,<br/>
            Praveen Kumar R<br/>
            +91-9791052738<br/>
            https://praveenkumar-resume.netlify.app/
      `

    };
    sendMail(mailOptions);
  });
});



app.get('/feedback', (req, res) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      console.log(error);
    }
    console.log(result);
    res.send(result);
  });
});

app.put('/feedback/:id', (req, res) => {
  console.log('req.body', req.body.item);
  console.log(req.params.id);
  const options = { returnNewDocument: true };
  const setData = { ...req.body.item };
  delete setData._id;
  collection.update({ _id: ObjectId(req.params.id) }, { "$set": setData }, { multi: true }).then((updatedDocument) => {
    res.send(updatedDocument);
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
  messagecollection = clientDB.collection("message");
  messagecollection.insertOne(req.body.item, (err, result) => {
    if (err)
      return err;
  });
  const mailData = req.body.item;
  // console.log('request', req);
  //2. You can configure the object however you want
  const html = "From " + mailData.name + ", Email address " + mailData.email + ", <br><br/></n><b>" + mailData.message + "</b>";
  const mailOptions = {
    from: mailData.email,
    to: "prawinmeetme@gmail.com",
    subject: mailData.subject,
    generateTextFromHTML: true,
    html: html
  };
  console.log('Mail Options', mailOptions);
  //3.
  replyEmail.push(mailData.email);
  sendMail(mailOptions, res);
  if (replyEmail.length > 0) {
    const mailOptions = {
      from: mailData.email,
      to: mailData.email,
      subject: 'Thanks for your Email!!!',
      generateTextFromHTML: true,
      html: `Hi ${mailData.name}, <br/><br/> 
            Thank you for your interest in my profile. I will review your message and get back to you shortly.<br/> <br/>
            Should you need any further information, please do not hesitate to contact me directly at +91 9791052738<br/><br/>
            Looking forward to talking to you soon!<br/><br/>
            Thanks,<br/>
            Praveen Kumar R<br/>
            +91-9791052738<br/>
            https://praveenkumar-resume.netlify.app/
      `

    };
    replyEmail.splice(0, 1);
    sendMail(mailOptions);
  }

});

function sendMail(mailOptions, res) {
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      if (res)
        res.status(500).send({ "message": "Something went wrong." });
    } else {
      if (res)
        res.status(200).send({ "message": "Email successfully sent to recipient!" });
    }
  });
}

app.listen(process.env.PORT || 8000, () => {
  client.connect(err => {
    if (err) {
      throw err;
    }
    clientDB = client.db("Profile");
    collection = clientDB.collection("feedback");
  });
  console.log('server running');

})