const name = "Adnan"
const repoCount = 50
// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //String Interpolation  (backtiks)


const gameName = new String('Adnan')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const aString = "    Adnan"
console.log(aString);
console.log(aString.trim());


const url = "https://adnan.com/adnan%20baig"
console.log(url.replace('%20', '-'));

console.log(url.includes('adnan'));















