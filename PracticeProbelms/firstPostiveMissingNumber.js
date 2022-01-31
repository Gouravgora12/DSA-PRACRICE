function find(arr){
 arr.sort()
 let size= arr.length
 for(let i=0; i<size-1;i++ ){
     if(arr[i]-arr[i+1]>1){
         return 
     }
 }
}
let arr=[1,2,0]

