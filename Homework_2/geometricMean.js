function geometricMean(ar = []){
    let mult = 1;
    for(let i = 0;i<ar.length;i++){
        mult*=ar[i];
    }
    let geomean = Math.pow(mult, 1/ar.length);
    return geomean;
}


