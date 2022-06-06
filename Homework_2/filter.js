function filter(array=[], filterfunc){
    let arr = []
    let c=[]
    for(let i=0;i<array.length;i++){
        let result = filterfunc(array[i],i,array)
        arr.push(result)
    }

    for(let k=0;k<arr.length;k++){
        if(arr[k]===true){
            c.push(array[k])
        }
    }
    return c

}