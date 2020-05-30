const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 5000;
const Mongo = require('mongodb').MongoClient;
const assert = require('assert');
const client = new Mongo(process.env.URI, { useUnifiedTopology: true }, { useNewUrlParser: true });
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
client.connect(err =>{
  if(err) throw err;
  
  const db = client.db("registeredUser");
  var cursor = db.collection('userinfos').find();
  
  cursor.forEach(function(doc){
    resultArray.push(doc);
  }, function(){
    client.close();
  })

});

var resultArray = [];
app.post('/login', (req, res)=>{
var userFound = false;

  
  var user = req.body.User;
  var pass = req.body.Password;
  for(var i = 0; i < resultArray.length; i++){
    if(user == resultArray[i].Username && pass == resultArray[i].Password && !userFound){
     // console.log('User Found Successfully!, ' + 'Welcome to you Mr. ' + resultArray[i].Username);
     userFound = true;
     userName = resultArray[i].Username;
    }
  }
if(userFound){
res.send(`Welcome to you Mr. ${userName}, you will be redirected momentarily!`);
} else if(!userFound){
  res.send('User is Not Found!');
}
});

app.listen(port, ()=>{
    console.log(`Connected on port: ${port}`);
})