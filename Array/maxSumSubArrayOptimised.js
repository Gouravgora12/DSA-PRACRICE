/******Problem 4 || Approch 2 || Time Complexity O(n) ********/
function maxSum(nums){
    let size= nums.length
    let maxSum= nums[0]
    let sum=nums[0]
    for(let i=1;i<size;i++){
      sum += nums[i]
      if(sum>maxSum) maxSum =sum;
      if(sum<0) sum=0;
    }   
    return maxSum 
}
let arr=[-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSum(arr));
//output is 6 
maxSum=4
sum=5
maxSum=5
sum=1+5
maxSum=5
maxSum=6
