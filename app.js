// make arguments array ES 5 Syntax Way 2

function test(){
    // way number one 
    // return Array.prototype.slice.call(arguments)
        // way number two
        return Array.from(arguments)
}

console.log(test(1,2,3,4,5,6,7,8,9));


// ES 6 Syntax 

function test2 (...a){
    return a
}

console.log(test2(1,2,3,4,5,6,7));