const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);


// function me(){
//     let username = "Adnan"
//     console.log(this.username);

// }
// me()


// const chai = function(){
//     let username = "Adnan"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "Adnan"
    console.log(this.username);
}
//chai()


//arrow function

const addTwo = (num1,num2) =>{
    return num1+num2    //explicit
}
console.log(addTwo(3,4));


const addTwoo = (num1,num2) => num1+num2   //implicit

console.log(addTwoo(3,4));






