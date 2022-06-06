function find(array=[], findfunc){
    let arr=[]
    for(let i=0;i<array.length;i++){
        let result = findfunc(array[i], i, array)
        arr.push(result)
    }
    for(let k=0;k<arr.length;k++){
        if(arr[k]===true){
            return array[k]
        }
    }
}


// 2nd variant

// function find(array=[],findfunc){
//     let arr=[]
//     let result = filter(array,findfunc)
//     return result[0]
    
// }