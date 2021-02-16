const Person = require('./person.js');
const Logger = require('./logger');
const http = require('http');


const server = http.Server((req,res)=>{
    if (req.url === '/'){
        res.end("<h1>HOME SWEET HOME</h1>");
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => {console.log(`Server Running!! in ${this.PORT}`)});

const person1 = new Person('Shreya Shivakumara', 30,9,6);

//person1.addition();

const logger = new Logger();

//logger.on('message', (data) => console.log(`Called listener :`, data));

//logger.log('Hey!');
//logger.log('Hey!');