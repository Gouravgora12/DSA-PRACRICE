let arr=[1,2,3,4,5]
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
console.log( "Result found at index",search(arr,4));