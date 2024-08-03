//for of
// ["", "",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
    
// }


// const greet = "helloworld"
// for (const gre of greet) {
//     console.log(gre);
// }

//MAPS

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);

for (const [key,value] of map) {
   // console.log(key, `=>`,value);    
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for(const [key,value] of myObject){
//     console.log(key ,':-' ,value);
    

// }


const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by Apple"
}
for (const key in myObject) {
  //  console.log(key);           
}

 const coding = ["js","cpp","java","python"]
// coding.forEach(function(val){
//   // console.log(val);
   
// })

// coding.forEach( (item)=>{
//      console.log(item);
     
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


const myCoding = [
    {
        languageName : "javascript",
        languageFileNmae : "js"
    },
    {
        languageName : "java",
        languageFileNmae : ".java"
    },
    {
        languageName : "python",
        languageFileNmae : ".py"
    },

]

myCoding.forEach((item)=>{
   console.log(item.languageName);

   
})













