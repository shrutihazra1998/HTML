var express = require('express');
var app = express();
var studentList=require('./student.json');
app.get('/home',function(req,res){
    res.send('Welcome students');
})
app.listen(3000,function(){
    console.log('server listening to the port 3000')
})
app.get('/showstudents',function(req,res){
    res.send(studentList);
})
