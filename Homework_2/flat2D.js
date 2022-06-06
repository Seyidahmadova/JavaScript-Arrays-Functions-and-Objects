function flat2D(array=[]){
    let c = []
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i][j]!==undefined){
                c.push(array[i][j])
            }
            continue
        }       
    }
    
    return c

}

