var events =  require('events');

//EventEmitter is used too fire events
var evmter = new events.EventEmitter();

evmter.on('myEvent',function(){
	console.log("Event is fired");
});

evmter.emit('myEvent');