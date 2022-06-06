function intersection(a=[], b=[]){
    let c = []
    for(let i=0; i<a.length; i++){
        if(includes(b, a[i])){
            c.push(a[i])
        }
        continue
    }
    return c

}



// 2nd variant

// function intersection(a=[], b=[]){
//     let c = []
//     for(let i=0; i<a.length;i++){
//         for(let j=0; j<b.length; j++){
//             if(a[i]===b[j]){
//                 c.push(a[i])
//             }

//             continue
//         }
//     }

//     return c
    
// }