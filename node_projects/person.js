

console.log(__dirname,__filename)

class Person{
    constructor(name,age,x,y){
        this.name = name;
        this.age = age;
        this.x = x;
        this.y = y;
    }



    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

    addition() {
        console.log(this.x + this.y)
    }
}


module.exports = Person;
