/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.*/
function singleNumber(num) {
    let n = num.length;
    for(let i = 0; i < n; ++ i) {
        while(num[i] >= 1 && num[i] <= n && num[i] != num[num[i]-1]){
            swap(num,num[i], num[num[i] - 1]);
        }
           
    }
    
    for(let i = 0; i < n; ++ i){
        if(num[i] != i + 1){
            return i + 1;
        }
    }
    return n + 1;
}
function swap(nums , i ,j){
    let temp=nums[i]
    nums[i]= nums[j]
    nums[j]= temp
}
let num=
console.log(singleNumber(num));