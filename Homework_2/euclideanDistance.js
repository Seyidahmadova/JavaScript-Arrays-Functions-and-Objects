function euclideanDistance(a = [], b = []){
    let dist1 = b[0] - a[0]
    let dist2 = b[1] - a[1]
    let s = Math.pow(dist1,2) + Math.pow(dist2,2)
    let eucdist = Math.pow(s, 1/2)

    return eucdist
}


