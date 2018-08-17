var express = require('express');
var mysql = require('mysql');
var app = express();
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
app.get('/',function(req,resp)
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
});
app.listen(1337);
