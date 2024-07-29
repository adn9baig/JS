// Symbol declaration
const mySym = Symbol("key1");

// Object definition
const Juser = {
    name: "Adnan",
    age: 18,
    location: "Hyd",
    [mySym]: "mykey1", // Use the correct symbol here
    email: "mirzaadnan93817@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
};

// Logging values
// console.log(Juser.email);               // Standard property access
// console.log(Juser["email"]);            // Accessing via string key
// console.log(Juser[mySym]);              // Accessing symbol-based property

// Modifying property
Juser.email = "adnan938@gmail.com";

// Freezing the object
Object.freeze(Juser);

// Attempt to modify the email after freezing (won't work)
Juser.email = "googleadnan@gmail.com";

// Logging email to show that it hasn't changed
// console.log(Juser.email); // Should still output: "adnan938@gmail.com"


// Juser.greeting = function(){
//     console.log("Hello JS User");
// }

// console.log(Juser.greeting);



//singleton or constructor

// const tinderUser = new Object()  //singleton
const tinderUser = {}   //non-singleton
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullname:{
          firstname: "ADNAN",
          lastname : "BAIG"  
        }
    }
}
//console.log(regularUser.fullname.userFullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);


// const obj3 = {...obj1, ...obj2}    //for Merge
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


/////////////***** object De-Structure *////////////////


const course = {
    coursename : "JS",
    COURSEPrice:"999",
    courseInstructor:"Adnan"

}
//course.courseInstructor
const {courseInstructor : instructor} = course
console.log(courseInstructor);



