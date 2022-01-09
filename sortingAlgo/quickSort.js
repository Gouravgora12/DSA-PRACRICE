let swap= require('../utility.js')
function partition(arr, l , h) {
    let pivot =arr[l]
    let low= l
    let high= h
    while(low<high){
        while(arr[low]<= pivot) low++
        while(arr[high]>pivot) high--
        if(low<high){
        swap(arr, low , high)
        }
    }
   swap(arr, high ,l )
   return high
}
function quickShort(arr, l,h ) {
    if(l<h){
        let pivot = partition(arr , l ,h)
        quickShort(arr , l, pivot-1)
        quickShort(arr ,pivot+1, h)
    }
    return arr
}

let input=[4,6,2,5,7,9,1,3]
let size = input.length-1
console.log( quickShort(input , 0 ,size ) );