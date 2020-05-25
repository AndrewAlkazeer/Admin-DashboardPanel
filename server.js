const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 5000;
const Mongo = require('mongodb').MongoClient;
const assert = require('assert');
const client = new Mongo(process.env.URI, { useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// changed path to public but it should be back to build

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'app/public')))
// Anything that doesn't match the above, send back index.html
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/index.html'))
  console.log('main path');
  
})
*/


app.post('/login', (req, res)=>{
  
  client.connect(err =>{
    if(err) throw err;
    var resultArray = [];
    const db = client.db("registeredUser");
    var cursor = db.collection('userinfos').find();

    function iterateFunc(doc) {
     // console.log(JSON.stringify(doc, null, 4)); // I can see the data HERE! but cant be pushed to an array!
    //  resultArray.push(doc);
   }
   
   function errorFunc(error) {
      console.log(error);
   }
   
   cursor.forEach(iterateFunc, errorFunc);
    resultArray.push(cursor);
    console.log(resultArray);
  client.close();
  });
  var user = req.body.User;
  var pass = req.body.Password;
 // res.json(cursor);
  res.json({User: user, Pass: pass});
});

app.listen(port, ()=>{
    console.log(`Connected on port: ${port}`);
})