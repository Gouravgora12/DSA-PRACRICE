//Problem 4 Approch 2
function maxSum(){
    let size= arr.length
    let maxSum= arr[0]
    let sum=0
    for(let i=0;i<size;i++){
      sum += arr[i]
      if(sum>maxSum){
          maxSum =sum
      }
      if(sum<0){
          sum=0
      }
    }   
    return maxSum 
}
let arr=[-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSum(arr));
//output is 6 