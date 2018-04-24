var express = require('express');
var path = require('path');
var app = express();

app.listen('8080',function(){
	console.log('app is listening');
});

app.get('/',function(req,res){
	res.sendFile('index.html', {root : path.join(__dirname,'./')});
});