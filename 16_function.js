function calc(val1,val2,...num1){// rest operator
return num1;
}
console.log(calc(200,400,500,2000));

const user={
    name:"kv",
    price:299
}

function object(abc){
    console.log(`username is ${abc.name} and price is ${abc.price}`);
}
// console.log(object(user))

const My=[200,400,600]
function value(getArray){
    return getArray[1];
}
console.log(value(My))