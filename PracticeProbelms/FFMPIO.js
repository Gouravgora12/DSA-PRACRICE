function findPosMis(nums){
    let size= arr.length
   for(let i=0; i<size; i++){
       if(arr[i]>size || arr[i]<=0){
           arr[i]=1
       }
   }
   console.log(arr);
}
let arr=[9,12,4,1,2,-1,8]
console.log(findPosMis(arr) );
