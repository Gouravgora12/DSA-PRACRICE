function patternMatch(str, pattern){
    let ptrLength= pattern.length
    let strLength= str.length
    if(pattern== 0 && strLength==0 || pattern==0 || strLength==0){
         return -1
    }
    for(let i=0; i<= strLength-ptrLength;){
        // if(str.charAt(i)==pattern.charAt(0)){
            let j
            for(j=0;j<ptrLength;j++){
                if(str.charAt(j+i)!=pattern.charAt(j)){
                    break
                }
            }
            if(ptrLength== j){
                return i
            }
            if(j==0){
                i++
            }
            else{
                i=i+j
            }
        // }
    }
    return -1
}
let str="ABCABCD"
let pattern= "ABCD"
console.log( patternMatch(str, pattern));
