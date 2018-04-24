var fs = require('fs');

console.log('before writing to file');

fs.writeFile('./wrfile','Hello World','utf8',function(error){
	if(error) throw error;
	console.log('writing to file');
});

console.log('after writing to file');