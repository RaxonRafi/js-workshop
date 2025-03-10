let myvar = "Hello World";
let name = "John";
const myvar2 = "20";
const num = 40
const myvar3 = true
const myvar4 = null
const myvar5 = undefined;
// + - * / % **

const result = `Hello World ${name}` 

if( num > 10){
    console.log(true);
} else {
    console.log(false);
}

for(let i = 1; i < 10; i++){
    console.log(i);
}


function myfunc(data){
    console.log(`Hello World ${data}`);
}
myfunc("John");

const myfunc = ()=>{
    console.log("hello world");
}
myfunc()
const data = [1,2,3,4,5,6,7,8,9,10]
const data2 = [20, 30,40,50,60,70,80,90,100]
const result2 = [...data,...data2]
console.log(data2[2]);


const student = {
        firstname: "Muhammad Rafi",
        id: "2318",
        semester:"7th"
    }
const student2 ={...student, city:"Ctg"}
console.log(student2);
const {city = "Ctg"} = student
const {firstname, id} = student;
console.log(firstname);
console.log(student.name);
function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);
// map filter reduce
// let ,var, const