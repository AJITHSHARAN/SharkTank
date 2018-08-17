var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var connection = mysql.createConnection(
  {
    host:'localhost',
  user:'root',
  password:'',
  database:'SHARKTANK1'
});
connection.connect(function(error)
{
  if(!!error)
  {
    console.log(error);
  }
  else {
    {
      console.log('connected');
    }
  }
});
app.get('/',function(req,res)
{
  var a= 'ROW=5';
  connection.query("SELECT * FROM  SHARK1 WHERE "+a , function(err,rows,fields){
if(err)
{
  console.log(err);
}
else
  {
    console.log("connected successfully");
    console.log(rows);
  }
});
res.render("home.ejs");
});
app.listen(1337);
