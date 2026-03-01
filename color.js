const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
const start=function(){
   let intervalId= setInterval(ChangeBgcolor,1000);
    function ChangeBgcolor(){

    document.body.style.backgroundColor=randomColor();
    }
};
const stop=function(){
    clearInerval(IntervalId);
};
document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click',stop);