function map(array=[], func){
  let arr = []
 for(let i=0;i<array.length;i++){
    let  result = func(array[i],i,array)
    arr.push(result)
  } 
  
  return arr

}