
function majority(nums,size) {
    let obj = {}
    let result= []
    for (let i = 0; i < size; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            obj[nums[i]] = obj[nums[i]] + 1
        }
        else {
            obj[nums[i]] = 1
        }
    }
    for (let key in obj) {
        if (obj[key] > size/3) {
            result.push(key)
        }
    }
    return  result.length>0 ? result:-1
}
let nums = [3,2,3]
let size = nums.length
console.log(majority(nums, size));