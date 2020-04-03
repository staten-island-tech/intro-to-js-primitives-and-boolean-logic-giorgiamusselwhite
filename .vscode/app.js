/* 
console.log ("Connected");

//red,green,yellow
let light = "Edis";
if (light === "green") {
console.log("Go");
} else if (light === "Yellow") {
console.log("Caution!");
} else {
console.log("Stop");
}



let kristyIntolerant = true;
let baoBaoIntolerant = false;

if(kristyIntolerant === true &&
    baoBaoIntolerant === true) {
    console.log("Get Almond Milk");    
    } else if(kristyIntolerant === true ||
        baoBaoIntolerant === true) {
         console.log("Get Both Milks");  
        } else {
         console.log("Just regular milk");   
        } */
    


/* function test (argument, argument, argument) {

} */

/* function test() {
console.log("I am a function");
}
test(); */
/* 
function argument(argument) {
console.log(argument);
}
 argument("Edis"); 
function add(x, y) {
    return x + y; return ends the function
}

console.log(add(2, 7));

let z = function add(x, y) {
    return x + y; return ends the function
};

z(1, 11);
console.log(z(1, 11)); */

//let x = "x";
//const z = "z"; 

/* const hello = function () {
    alert ("hello");
};
hello();

const bye = function() {
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
};

function beatles {
    hello();
    bye();
    hello();
    bye();
}
beatles(); */
/* 
function makeFunc () {
const name = "Sun";
console.log(name);
}

function hello() {
    const name = "Jaiyu";
    console.log(name);
}
hello();
makeFunc(); */

/* function makeFunc() {

    const name = "Sun";
    function displayName () {
        alert(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); */

/* const names = ["Michelle", "Edis", 
"Richard", "Vincent", "Gisele"];
names.push("Katrina");
const Gisele = names.slice(-1); */

/* const divArr = document.querySelectorAll(".bc");
function color() {
    divArr.forEach(div => {
        div.style.backgroundColor = "blue";
    });
}
color(); */

/* //challenge 1
let students = ["Riya", "Omor", "Alan", 
"Jaiyu", "Michael", "Lisa", "Richard"]
let result = students.filter(student => student.length > 4)
//filtering out all students whose names have less than 5 characters
 */
/* 
 //challenge 2
 let students = ["Riya", "Omor", "Alan", 
"Jaiyu", "Michael", "Lisa", "Richard"]
console.log(students.includes("Junshen"));
console.log(students.some(name => name == "Savva" || name == "Alan"));
//checking if the array includes Junshen and then seeing if Alan or Savva were  included in some of the array
 */