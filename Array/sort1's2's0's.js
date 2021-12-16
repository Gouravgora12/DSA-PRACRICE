let nums= [0,1,1,0,1,2,1,2,0,0,0,1]
function sort012(nums){
let size= nums.length
let mid=0
let low= 0
let high= size-1
      while(mid<=high)
        {
            if(nums[mid]==1){
                mid++   
                continue    
            }
            else if(nums[mid]==0){
                let temp= nums[low]
                nums[low]=nums[mid]
                nums[mid]= temp
                mid++
                low++
                continue
               
            }
           else if(nums[mid]==2){
                let temp= nums[high]
                nums[high]=nums[mid]
                nums[mid]=temp
                                high--
                continue
               
            }

        }
        return nums
}
console.log(sort012(nums))