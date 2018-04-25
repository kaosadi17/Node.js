var express = require('express');
var app = express();

app.listen('8080',function(){
    console.log('app is listening');
});

app.get('/',function(req,res){
    var response = 'Hello ' + req.query.firstname;
    res.end(response);
});