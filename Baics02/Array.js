//array Decalarion
const myArr = [0,1,23,4,5]
const myHeors = ["Deadpool","Wolverine"]
const aArray = new Array(1,2,3,4)
//console.log(myHeors[0]);


//Array Method

myArr.push(6)
// console.log(myArr);

myArr.unshift(9)  //shift the value to first
// console.log(myArr.includes(23));   


// console.log(myArr);  


//slice splice
// console.log("A ",myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B ",myArr);
// const myn2 = myArr.splice(1,3)
// console.log(myn2);


// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// splice(start)

// concat
const marvel_heros = ["Iron man","Thor","Cap"]
const dc_heros = ["Batman","superman","wonder women"]
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //spread
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)


console.log(Array.isArray("Adnan"));
console.log(Array.from("Adnan"))
console.log(Array.from({name : "Adnan"}))   //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));






