let arr=[3,4,27,11,15]
function twoSum(nums, target){
    const len = nums.length;
    if(len<=1) return []
    if (len === 2) return [0, 1];
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
    return []
}
console.log( twoSum(arr, 6))