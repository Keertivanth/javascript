function name(){
    console.log("kv");
}
// name();

// function add(num1,num2){
//     console.log(num1+num2);
// }
// // add(3,4);
// // add(3,"4");
// const result = add(3,4);
// console.log("result:",result);

//result->undefined ynha pr add fn koi value return nhi krra toh result m store nhi goga kux 

//for returning a value we have provide return type also
function add(num1,num2){
  let res=num1+num2;
  return res;
}
const res=add(3,5);
// console.log("result:",res);


function login(name){ // or -> name ="sam"
    if(name === undefined){
        console.log("please enter a usernasme ");
        return
    }
    return `${name} just logged in `
}
console.log(login("kv"));