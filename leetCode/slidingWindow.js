function slide(arr,k){
    let len= arr.length
    let maxSum=arr[0]+arr[1]
    if(len<=1){
        return -1
    }
    for(let i=1;i<len-k+1;i++){
        let sum=0
        for(let j=i;j<k+i;j++){
            sum += arr[j]
        }
        maxSum= Math.max(maxSum, sum)
    }
    return maxSum
}
let arr=[1,8,30,-5,20,7,55]
console.log( slide(arr, 2));