let swap= require('../utility.js')
function bublesort(arr,n) {
    for(let i=0; i<n; i++){
        for(let j=0;j<n; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, i,j)
            }
        }
    }
}
let arr=[9,4,7,6,3,1,5]
let n= arr.length
bublesort(arr,n)
console.log(arr);