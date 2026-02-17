// const user=true
// const debit =true
// const loginfromgoogle=false
// const loginfromemail=true
// if(user && debit){
//     console.log("allowed")
// }
// if(loginfromgoogle || loginfromemail){
//     console.log("userloggedin");
// }
const month=3;
switch(month){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("default case match");
        break;

}

// //falsy values
// false,0,-0,BigInt , "",null,undefined,Nan

// //truthy values
// "0" ,'false'," ",[],{},function(){}

const obj={}
if(Object.keys(obj).length===0)
    console.log("object is empty");

const ice=100
ice<=80 ? console.log("less than 80") :console.log("More than 80");