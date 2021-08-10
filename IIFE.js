// IIFE Immediately Invoked Function Expression


for(var i = 1; i <= 5; i++){
    (function(n){
        setTimeout(()=>{
        console.log(n);
    },1000*n)
})(i)
}

for(let x = 0; x <= 5; x++){
    setTimeout(()=>{
        console.log(x);
    },1000*x)
}