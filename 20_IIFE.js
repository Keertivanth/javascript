// function ko run krne k liye uske bhar parenthesis lgado

(
    function a(){
        //named iife
        console.log(`hii`);
    }
)();//semicolon lgana pdega dusre ko chlane k liye

(
    (name)=>{//unnamed iffe
        console.log(`hii ${name}`);
    }
)("kv");