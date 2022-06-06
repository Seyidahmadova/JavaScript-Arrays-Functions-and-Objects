function some(array=[], somefunc){
    let arr=[]
    for(let i=0;i<array.length;i++){
        let result = somefunc(array[i], i, array)
        arr.push(result)
    }

    for(let k=0;k<arr.length;k++){
        if(arr[k]===true){
            return true
        }
    }
    return false
}