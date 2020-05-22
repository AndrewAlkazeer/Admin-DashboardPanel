const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// changed path to public but it should be back to build

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'app/public')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/index.html'))
})

app.get('/login', (req, res)=>{
    var user = req.body.User;
    var pass = req.body.Password;
    console.log(`Name: ${user}, Pass: ${pass}`)
res.send('connected!');
});


app.listen(port, ()=>{
    console.log(`Connected on port: ${port}`);
})