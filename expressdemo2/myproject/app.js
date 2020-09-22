var express = require('express');
var app = express();
var bookList=require('./books.json');
app.get('/search',function(req,res){
    var author = req.query.author;
    var sublist =[];
    var flag =0;
    for(const i in bookList){
        if(bookList[i].author == author){
            flag = 1;
            sublist.push(bookList[i]);
            
        }
    
    
    else(flag == 0)
        res.send('Author not found');
        res.send(sublist);
}})
app.get('/showbooks',function(req,res){
    res.send(bookList);
})
app.get('/home',function(req,res){
    res.send('Welcome to express');
})

app.listen(3000,function(){
    console.log('server listening to the port 3000')
})

//http://localhost:3000/login/priya/bangalore
app.get('/login/:username/:city', function(req,res){
    var uname = req.params.username;
    var ucity = req.params.city;
    res.send(`Welcome ${uname} from  ${ucity}`);
})

app.get ('/userDetails/:username/:city', function(req,res){
    var uname = req.params.username;
    var ucity = req.params.city;
    var user = {"name": uname, "city":ucity};
    res.send(user);
})
app.get('/register', function(req,res){
    name = req.query.studentName;
    id = req.query.studentId;
    res.send({"stName": name, "stId":id});
})