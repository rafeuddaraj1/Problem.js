class CustomError extends Error{
    constructor(message){
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this,CustomError)
        }
    }
}

try{
    console.log('I am line Number 11');
    console.log('I am line Number 12');
    console.log('I am line Number 13');
    throw new CustomError('I am Your Custom Error')
    console.log('I am line Number 15');
    console.log('I am line Number 16');
    console.log('I am line Number 17');
}
catch(e){
    console.log(e.message);
}