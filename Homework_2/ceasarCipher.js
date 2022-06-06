function ceasarCipher(string, val){
    let s='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let b='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    k = ''

    for(n of string){
        if(includes(s,n)){
            k+=s[s.indexOf(n)+val]
        }
        if(includes(b,n)){
            k+=b[b.indexOf(n)+val]
        }
        else{
            continue
        }
    }

    return k

}