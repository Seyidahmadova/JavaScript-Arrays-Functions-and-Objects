function unique(array = []){
    let arr = []
    for(let i = 0; i<array.length; i++){
        if(includes(array, array[i]) === true && includes(arr, array[i])===false){
            arr.push(array[i])           
        }
        continue
    }
    return arr
}