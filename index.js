//Importing installed library
//Signup
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))  //in public folder
app.use(bodyParser.urlencoded({
  extended: true
}))

//Connect to mongodb
//Connecting mongo database 
//'mongodb://localhost:27017/'
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//to display in terminal
var db = mongoose.connection;
db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("Connected to database"));

//data input from user
app.post("/sign_up", (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  //creating object to store in mongodb

  var data = {
    "username": username,
    "email": email,
    "password": password
  }

  //sending input to database with mongodb queries

  db.collection('users').insertOne(data, (err, collection) => {
    if (err) throw err;
    console.log("Record inserted succesfully");
  });
  return res.redirect("login.html")  //after clicking on submit open login page 
})

app.post("/login", (request, response) => {
  try {
    //get data from login.html form

    const username = request.body.username;
    const password = request.body.password;

    /*Get data from mongoDB*/
    const usermail = db.collection('users').findOne({ email: username }, (err, res) => {

      if (res === null) {
        response.send("Information not match.Please create account first");
      }
      else if (err) throw err;

      if (res.password === password) {

        console.log("Login Successful");
        return response.redirect("index.html")
      }

      else {
        console.log("Password not match");
        response.send("Password not match");
      }
    })

    /* console.log(`${username} and ${password}`);*/
  } catch (error) {
    console.log("Invalid Information");
  }
})

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": '*'
  })

  return res.redirect('sign.htm');
}).listen(2000);  // to display on localhost:3000



//To run this index.js to connect to database run the file on vs code
//On terminal if the database connnected it will display "Connected to database"
//Then on the browser type localhost:3000 to run sign up file 
