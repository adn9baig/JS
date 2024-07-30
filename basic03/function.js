// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }
// addTwoNumbers(3,4);


function addTwoNumbers(number1,number2){
  
    let result =  number1 + number2;
    return result;

}
const result  = addTwoNumbers(3,4);
// console.log("Result",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a username");
        return;
   }
    return `${username} has logged in`

}
//console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1

}
//console.log(calculateCartPrice(200,400,500));


const user = {
    username: "Adnan",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)







