const Person = require('./person.js');
const Logger = require('./logger');

const person1 = new Person('Shreya Shivakumara', 30,9,6);

//person1.addition();

const logger = new Logger();

logger.on('message', (data) => console.log(`Called listener :`, data));

logger.log('Hey!');