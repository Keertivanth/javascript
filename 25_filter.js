const coding =["kv","kv1","kv2"]
coding.forEach( (item)=>{
    console.log(item)
})

const num = [1,2,3,4,5,5,7]
 const a = num.filter((num)=>num>4) //returning the value
//foreach does not return the values 
// while filter returns the value
// console.log(a);

const num1=[]
num.forEach((num)=>{
    if(num>4)
        num1.push(num)//method 2 without filter
})
console.log(num1)

 const b= num.filter((num)=>{
    return num>4;}
)
//if we use {} this ->scope has started so use return 

const books= [//array of books
{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
]

let userBook = books.filter((bk)=>bk.genre ==='Science')
let userBook1 = books.filter((bk)=>bk.publish >=2000)
//if use scope {} use return
console.log(userBook1);