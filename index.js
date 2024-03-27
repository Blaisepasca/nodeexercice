const logEvents = require("./logEvents");

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

//initialize object

const myEmitter = new MyEmitter();

// add listener for the log event

MyEmitter.on('log',(msg) => logEvents(msg));

setTimeout(()=>{
    //Event 
    MyEmitter.emit('log','Log event emitted!');
},2000);