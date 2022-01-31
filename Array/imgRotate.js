function transPose(arr){
let sizeOfMatrix= arr.length
for(let i=0 ; i<sizeOfMatrix; i++){
    for(let j=0; j<i;j++){
        let temp= arr[i][j]
        arr[i][j]=arr[j][i]
        arr[j][i]=temp
    }
}
}
function swap(arr){
    let sizeOfMatrix= arr.length  
    for(let i=0; i<sizeOfMatrix;i++){
        let left= 0
        let right= sizeOfMatrix-1
        while(left<right){
            let temp = arr[i][left]
             arr[i][left]= arr[i][right]
             arr[i][right]= temp
            left++
            right--
        } 
    }
    
   
}
function imgRotate(arr){
    transPose(arr)
    swap(arr)
    return arr
}
let arr= [[1,2,3],[4,5,6],[7,8,9]]
console.log(imgRotate(arr))
// [[1,2,3],
// [4,5,6],
// [7,8,9]]
//transpose
//[[1,4,7],
// [2,5,8]
// [3,6,9]]

// swap

//[[7,4,1]
// [8,5,2]
// [9,6,3]]

