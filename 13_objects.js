// const tinder =new Object() ->singleton objectt 
const tinder ={}
tinder.id="123abc"
tinder.name="sammy"
tinder.isLoggedIn=false
// console.log(tinder)



const regular={
    email:"kv0@gmail.com",
        fullname:{
            userfullname:{
                firstname:"kv",
                lastname:"chaudhary"}
        }
}
// console.log(regular.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj3}
// object inside a object ->error
const obj3=Object.assign({},obj1,obj2)// {}->target,obj1,obj2->source
// console.log(obj3)

console.log(Object.keys(tinder));
console.log(tinder.hasOwnProperty('isLoggedIn'))