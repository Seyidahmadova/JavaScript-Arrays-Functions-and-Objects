function union(a=[],b=[]){
    let c = []
    let d=[]
    for(let i=0;i<(a.length+b.length);i++){
            if(includes(a, b[i])!==true || includes(b,a[i])){
                c.push(a[i],b[i])
            }
    }

    for(let k=0;k<c.length;k++){
        if(c[k]!==undefined){
            d.push(c[k])
        }
    }
    return d



}