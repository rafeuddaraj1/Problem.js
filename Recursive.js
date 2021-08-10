let arr = [1,2,3,4,5,6,7,8,9]

function recursive(arr,lastIndex){
    if (lastIndex < 0) {
        return 
    }
    console.log(arr[lastIndex]);
    return recursive(arr,lastIndex-1)
}

recursive(arr,arr.length-1)