//declarando
class user{};
//haciendo una instancia de una clase
const newuser= new user();

class user{
    //metodos
    greeting () {
        return `hello`
    }
}

const germange = new user ();
console.log(germange.greeting())

// constructor 
class user {
    //constructor
    constructor() {
    console.log('nuevo usuario')
}
greeting () {
    return `hello`
}
}

const satoru= new user();

//this (hace referencia al elemento padre que lo contiene)

class user{
    constructor (name){
        this.name = name
    }
    //metodos
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}
const satoru = new user ('satoru')
console.log(satoru.greeting())

//setters getters

class user{
    //constructor
    constructor(name,age){
        this.name=name
        this.age=age
    }
    //metodos
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
get uAge(){
    return this.age
}
set uAge(n){this.age=n
}
}

const bebeloper = new user ('satoru',15)
console.log(bebeloper.uAge)
console.log(bebeloper.uAge=20)
