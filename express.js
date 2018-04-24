var express = require('express');

var app = express();

app.get('/hello',function(request,response){
	response.send("Helo world");
});

app.listen('8080',function(){
	console.log('app is listening on port 8080');
});


//to run this in browser -> localhost:8080/hello