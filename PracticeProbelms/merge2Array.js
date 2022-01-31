function merge(a1,a2){
    let a1Size= a1.length
    let a2Size= a2.length
    let mergedArray=[]
    let i=0
    let j=0
    let k=0
    // if(a1Size==0 && a2Size==0){
    //     return []
    // }
    while(i<a1Size && j<a2Size ){
        if(a1[i]<=a2[j]){
            mergedArray[k]= a1[i]
            i++
            k++
        }
        if(a1[i]>a2[j]){
            mergedArray[k]= a2[j]
            j++
            k++
        }
    }
    while(i<a1Size){
        mergedArray[k]=a1[i]
        i++
        k++
    }
    while(j<a2Size){
        mergedArray[k]=a2[j]
        j++
        k++
    }
    return mergedArray
}
let a1=[]
let a2=[]
console.log( merge(a1,a2) );