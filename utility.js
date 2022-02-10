function swap(nums , i ,j){
    let temp=nums[i]
    nums[i]= nums[j]
    nums[j]= temp
}
function search( arr, x) {
    let low =0
    let heigh= arr.length-1
    while (low<=heigh) {
        let mid= parseInt((low+heigh)/2)
        if(arr[mid]==x){
            return mid;
        }
        else if(arr[mid]>x){
            heigh=mid-1
        }
        else{
            low=mid+1
        }
    }
    return -1; 
}
module.exports= {
    swap:swap,
    search:search