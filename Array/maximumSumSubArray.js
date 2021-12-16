/******Problem 4 || Approch 1 || Time Complexity O(n^2) ********/
function maxSum(){
    let size= arr.length
    let maxSum= 0
    for(let i=0;i<size;i++){
        let sum=0
        for(let j=i+1;j<size;j++){
            sum += arr[j]
            if(sum>maxSum){
                maxSum=sum
            }
        }
    }   
    return maxSum 
}
let arr=[-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSum(arr));
//output is 6 