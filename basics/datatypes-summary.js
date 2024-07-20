//primitive   call by Value

//   string, Number, Boolean, null, undefined, Symbol,

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 232302249304430493n


// Non Primitive type (Reference)

//Array, Objects, Functions
const heros = ["Ironman","Captain America","Thor", "Hulk"];
let myObj = {
    name : "Adnan",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

