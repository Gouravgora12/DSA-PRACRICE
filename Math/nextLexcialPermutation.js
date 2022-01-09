/* Next lexical permutation  || Time complexity O(n)*/
function nextPermutation(nums){
    let i =nums.length-2
    let j=0
    while(i>=0 &&nums[i]>=nums[i+1]) i--;
    if(i>=0){
        j=nums.length-1
        while( j&&nums[j]<=nums[i]) j--
        swap(nums,i,j)
    }
    
    reverse(nums, i+1 , nums.length-1)
    return nums;
}
function swap(nums , i ,j){
    let temp=nums[i]
    nums[i]= nums[j]
    nums[j]= temp
}
function reverse (nums ,i , j){
       while(i<j){
           swap(nums,i++,j--)
       }
}
let input=[1,2,3]//[1,1]// [4,1,7,5,3,2,0] //[3,2,1]// //[5,1,1] 
// output [4,2,0,1,3,5,7]
console.log(nextPermutation(input))