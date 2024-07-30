function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
//    console.log(website);
    two();

}
//one();


if(true){
    const username = "Adnan"
    if(username === "Adnan"){
        const website = "youtube"
       // console.log(username + website);

    }
   // console.log(website);

}
//console.log(username);



////++++++++++++++++++++++++ iteresting ++++++++++++++++++++++++++

//Hoisting


console.log(addone(5));
function addone(num){
    return num+1;
}
//addone(5);
console.log(addTwo(5));
const addTwo = function(num){
    return num+2;
}

addTwo(5)