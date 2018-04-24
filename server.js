var server = require('http');

server.createServer(engine).listen('8080');

function engine(request, response){
	response.writeHead('200',{'Content-Type' : 'text/plain'});
	response.end('This is from server');
}