function sort(arr, l,h){
    let pivot= arr[l]
    let low=l
    let high= h
   while(low<=high){
       while(arr[low]<=pivot) low++
       while(arr[high]>pivot) high--
       if(low<high){
           swap(arr, low,high)
       }
   }
   swap(arr, l, high)
   return high
}
function quickShort(arr, l,h){
    if(l<h){
        let pivot= sort(arr, l ,h)
        quickShort(arr, l, pivot-1)
        quickShort(arr, pivot+1, h)
    }
    return arr
}
function swap(nums , i ,j){
    let temp=nums[i]
    nums[i]= nums[j]
    nums[j]= temp
}
let input=[1,10,2,7,3,4]
let size = input.length-1
console.log( quickShort(input , 0 ,size ) );