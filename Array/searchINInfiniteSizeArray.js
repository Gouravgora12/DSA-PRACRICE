function findElement(arr,el){
    if(arr[0]==el) return 0
    let i=1
    while(arr[i]<el) i=i*2;
    if(arr[i]==el) return i;
    let min= 1+parseInt(i/2)
    let max= i-1
    return binarySearch(arr,el,min, max )
}
function binarySearch(arr, el,l, h){
    while(l<=h){
        let mid = l+parseInt((h-l)/2)
        if(arr[mid]== el) return mid;
        if(arr[mid]<el) {
            l= mid+1
        }
        else{
            h= mid-1
        }
    }
    return -1
}
let el=170;
let arr=[1, 2, 3, 40, 50, 60,70,80,90,100,110,120,140,170,180,200,300,400,500,600,700]
console.log( findElement(arr, el));