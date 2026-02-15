// const user={
//     us:"kv",
//     price:99,
//     Welcome:function(){
//         console.log(`${this.us},welcome to website`);
//     }
// }
// //this->current context ko access krta h  
// //current context -->jo abhi chlra h
// //eg-> user object
// user.Welcome()
// user.us="k";
// user.Welcome()
// // output ->k,welcome to website->bcoz of this ,current context==k

const user={
    us:"kv",
    price:99,
    Welcome:function(){
        console.log(`${this.us},welcome to website`);
        console.log(this);//give the whole output of the user
    }
}
//user.Welcome();

const a=function(){
    let username="kv"
    console.log(this.username);
}
a();//gives undefined

const b = (num1,num2)=> ({username:"kv"})
console.log(b(3,4))