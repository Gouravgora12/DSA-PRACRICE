
function majority(nums) {
    let size = nums.length;
    let count=1
    let el=nums[0]
    for (let i = 1; i < size; i++) {
        if(count==0){
            el=nums[i]
        }
        if(el==nums[i]){
            count++
        }
        else{
            count -=1
        }

    }
    return count> 0 ? el:-1
}
let a = [3,2,3]
console.log(majority(a));