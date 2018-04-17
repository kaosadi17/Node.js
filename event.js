var events = require("events");

 
//create eventEmitter object

var eventEmitter = new events.EventEmitter();

//create event handler function
	
var eventhandler = function connect(){
	console.log("message via event handler\n");
}

eventEmitter.on('connect', eventhandler);

eventEmitter.emit('connect');

console.log("program ended");
