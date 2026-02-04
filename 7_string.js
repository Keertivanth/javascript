const name="hitesh"
const repocount=50;

//console.log(`hello my name is ${name} and my repo count is${repocount}`);
//above is string ointerpolation `` <-back tick  
const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,3)
console.log(anotherString);

const newStringOne = " kv ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://kv.com/kv-chaudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'));
console.log(url.split('-'));
