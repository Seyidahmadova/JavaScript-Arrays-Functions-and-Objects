function generatePassword(passwordLength){
    let s='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''

    for(let i=0;i<passwordLength;i++){
        let randn = Math.floor(Math.random()*s.length)
        pass+=s.substring(randn,randn+1)
    }

    return pass
}