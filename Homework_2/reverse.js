function reverse(array=[]){
    let c=[]
    for(let i=array.length-1;i>=0;i--){
        c.push(array[i])
    }
    return c
}