let arr = ['rafe','papiya','tasfiya','rozi','farooq','shihab','rakib']

function stringLength5OutPut(...array){
    for(let i = 0; i < array.length; i++){
        if(array[i].length === 5)
        return array[i]
    }
}

console.log(stringLength5OutPut(...arr));


function stringLength5OutPut2(array){
    array.forEach((v,i)=>{
        if(array[i].length === 5)
        return array[i]
    })
}

console.log(stringLength5OutPut2(arr));


function stringLength5OutPut3(array,lastIndex){
    if (lastIndex < 0) {
        return
    }
    else{
        array.forEach((v,i)=>{
            if (array[i].length === 5) {
                return array[i]
            }
        })
    }
    return stringLength5OutPut3(arr,lastIndex-1)
}

console.log(stringLength5OutPut3(arr,arr.length-1));