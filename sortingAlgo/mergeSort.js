let b=[]
function merge(arr, mid , l , h) {
let n1= (mid-l)+1
let n2= h-mid
let a1=[]
let a2=[]
for(let i=0;i<n1; i++ ){
    a1[i]= arr[l+i]
}
for(let j=0;j<n2; j++ ){
    a2[j]= arr[mid+1+j]
}
let i=0
let j=0;
let k=l
while(i<n1&& j<n2){
       if(a1[i]<=a2[j]){
           arr[k]= a1[i]
           i++
       }
       else{
           arr[k]= a2[j]
           j++
       }
       k++
   }
    while(i<n1)
    {
           arr[k]=a1[i]
           i++
           k++
       }
  
    while(j<n2){
        arr[k]=a2[j]
        j++
        k++
    }
}
function mergeSort(arr,  l , h) {
    if(l>=h){
        return
    }
        let mid =l+ parseInt((h-l)/2)
        mergeSort(arr, l , mid)
        mergeSort(arr, mid+1, h)
        merge(arr, mid , l ,h)

    
}
 let arr=[1,5,8,15, 24, 3, 10 , 16 , 20]
let size = arr.length-1

mergeSort(arr, 0 , size)
console.log(arr);
