const num =[1,2,3,4,5,6,7,8]
const a=num.map((num)=>num+10)
const result = num.filter((n) => n > 5);
console.log(result)
const b=num.map((num)=>{return num+10})
//map is just same as filter automatically returns the value
//console.log(a);


//chaining 
const x = num.map((num)=> num*10)
.map((num)=>num+1)//iinstead of num we can also use n
.filter((n)=>n>40)
console.log(x);

//reduce fn 
const kv=[1,2,3]
const total=kv.reduce(function (acc,curr){
    console.log(`acc:${acc} and curr:${curr}`)
    return acc+curr;
},0)
console.log(total);
//arrow fn
const kv1=[1,2,3]
const total1=kv.reduce((acc,curr)=>acc+curr,0)
// console.log(total1);

const shop=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"data science",
        price:2999
    },
    {
        itemName:"python",
        price:499
    },
]
//easy way to solve this-->addn of price
const k=shop.reduce((acc,item)=>acc+item.price,0)
console.log(k);