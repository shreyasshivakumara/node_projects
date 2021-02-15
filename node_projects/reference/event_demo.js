const EventEmitter = require('events');

// Class created
class MyEmitter extends EventEmitter {}

x = 1;

// Object created
const myEmitter = new MyEmitter();
const addEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', (a,b) =>{ 
    console.log(a,b);
});

// New Event listener
addEmitter.on('event', ()=>
    {
        console.log(x++);
});

for (let i = 0; i < 5; i++){ 
    addEmitter.emit('event');
  }

// Init Event
//myEmitter.emit('event','x','y');