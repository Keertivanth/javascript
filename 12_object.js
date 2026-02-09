//object literals
const sym = Symbol("key");
const user={
    name:"kv",//form og key-value
    age:21,
    [sym]:"mykey",//to consider as a symbol adding from above 
    location: "meerut",
    email :"kv@gmail.com"
}
// console.log(user.email)
// console.log(user["email"]);
// console.log(user[sym]);

//user.email="kv2@gmail.com";
//Object.freeze(user);//prevent from changes in object
//console.log(user);
 user.greeting=function(){
    console.log("kv");
 }
 console.log(user.greeting());