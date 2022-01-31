function patternMatch(str, pattern){
    let ptrLength= pattern.length
    let strLength= str.length
    if(pattern== 0 && strLength==0 || pattern==0 || strLength==0){
         return -1
    }
    for(let i=0; i<= strLength-ptrLength; i++){
        if(str.charAt(i)==pattern.charAt(0)){
            let j
            for(j=1;j<ptrLength;j++){
                if(str.charAt(j+i)!=pattern.charAt(j)){
                    break
                }
            }
            if(ptrLength== j){
                return i
            }
           
            
        }
    }
}
let str="ABCABABCDA"
let pattern= "ABCD"
console.log( patternMatch(str, pattern));
5
6