

if (true){
let a=10  //{}->scope
const b=20
var c=30// var is not even declared in it and still giving output
}
// console.log(a);
// console.log(b);
console.log(c);

let  a =300
if (true){
let a=10  //{}->scope
const b=20
c=30
console.log(a);}//inner has value 10->block scope

console.log(a);//outer ->global scope