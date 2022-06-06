function includes(array = [], val){
    for(let i = 0; i<array.length; i++){
        if(val === array[i]){
            return true
        }
    }
    return false
}