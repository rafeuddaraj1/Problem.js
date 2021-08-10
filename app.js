// make arguments array ES 5 Syntax Way 2

function test(){
    // way number one 
    return Array.prototype.slice.call(arguments)
}

console.log(test(1,2,3,4,5,6,7,8,9));


