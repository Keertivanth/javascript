//for of  ->works on values

const a =[1,2,3,5]
//for(const i of a ) console.log(a);

// const b = "Hello World"
// for(const i of b){
//     console.log(`Each char is ${i}`)
// }


//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('FR',"France")
// console.log(map)


for(const key of map){//gives in form of array
    // console.log(key)
}
for(const [key,value] of map){
   // console.log(key,'->',value)
}

const obj={
    'game1' :'NFS',
    'game2': 'Spiderman'
}

// for(const [key,value] of obj){
//     //console.log(key,'->',value)
// }//->error -> obj not iterable





//for in ->works on indexes
const  obj2={
    js:'java',
    cpp:'c++',
    swift :"Swift by apple"
}
for(const key in obj2){
   // console.log(`${key} shortcut is for${obj2[key]}`);
}
    
const programming=["js","kv","java"]
for(const key in programming){
    //console.log(programming[key]);
}

//for each
const program=["js","kv","java"]
// program.forEach(function(val){
//     console.log(val);
// })
// OR
// function kv(item){
//     console.log(item);}

//     program.forEach(kv);



//by arrow fn
program.forEach((item,index,arr) => {
    console.log(item,index,arr);
})
// for each always uses callback