const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rajenpk:Mapr4567@prawin-1pj0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })

const app = express();

app.use(express.static('public'));

app.get('/timestamp',(req,res)=>{
	client.connect(err => {
            collection = client.db("Profile").collection("personaldetails");
			collection.find({}).toArray((error, result) => {
				if(error) {
					console.log(error);
				}
				console.log(result);
				res.send(result);
			});
        });
});

app.listen(process.env.PORT || 8000,()=>{ console.log('server running');})