function every(array=[], everyfunc){
    let arr=[]
    for(let i=0;i<array.length;i++){
        let result = everyfunc(array[i], i, array)
        arr.push(result)
    }

    for(let k=0;k<arr.length;k++){
        if(arr[k]!==true){
            return false
        }
    }
    return true
}