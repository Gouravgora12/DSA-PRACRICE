function unique(arr) {
    let size= arr.length
    let set =new Set()
    for(let i=0; i<size;i++ ){
        set.add(arr[i])
    }
    return [...set]
}
let arr= [2,2,1,1,1]
console.log(unique(arr))
