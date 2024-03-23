//Importing installed library
//Login
var express = require("express");
var bodyParse = require("body-parser");
var mongoose = require("mongoose");

const app = express()

app.use(bodyParse.json())
app.use(express.static('public'))  //in public folder
app.use(bodyParse.urlencoded({
  extended:true
}))

mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})  

var db=mongoose.connection;
db.on('error',() => console.log("Error in connecting to database"));
db.once('open',() => console.log("Connected to database"));

//checking page

app.get("/login",(req,res) => {
    return res.redirect("login.html");
}).listen(3000);

app.post("/login", (request , response) => {
  try {
    //get data from login.html form

    const username= request.body.username;
    const password= request.body.password;

    /*Get data from mongoDB*/
    const usermail =db.collection('users').findOne({email: username},(err , res)=>{
  
        if(res===null){
            response.send("Information not match.Please create account first");
        }
        else if(err) throw err;

        if(res.password===password){

            console.log("Login Successful");
            return response.redirect("index.html")
        }

        else{
            console.log("Password not match");
            response.send("Password not match");
        }
    })

   /* console.log(`${username} and ${password}`);*/
  } catch (error) {
    console.log("Invalid Information");
  }
})