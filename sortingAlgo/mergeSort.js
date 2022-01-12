let b=[]
function merge(a, mid , l , h) {
    
    let low = l , high= mid+1, k=l
    while(low<=mid && high <= h){
        if(a[low]<=a[high]){
            b[k]= a[low]
            low++
        }
        else{
            b[k]= a[high]
            high++
        }
        k++
    }
    if(low>mid){
        while(high<=h){
            b[k]= a[high]
            k++
            high++
        }
    }
    else{
        while(low<mid){
            b[k]= a[low]
            k++
            low++
        }
    }
}
function mergeSort(arr,  l , h) {
    if(l<h){
        let mid = parseInt(l+(h-l)/2)
      
        mergeSort(arr, l , mid)
        mergeSort(arr, mid+1, h)
        merge(arr, mid , l ,h)

    }
}

 arr=[1,5,8,15, 24, 3, 10 , 16 , 20]
//let arr =[15, 5, 24, 8, 1, 3, 16 , 10, 20]

let size = arr.length-1

merge(arr ,4, 0 , size)
console.log(b);
//console.log(arr);   