/*//left rotate bye one
function rotate(arr) {
    let temp= arr[0]
    let n= arr.length
    for(let i=1; i<n; i++){
        arr[i-1]= arr[i]
    }
    arr[n-1]=temp
    return arr
}
let arr=[1,2,3,4,5]
console.log(rotate(arr));
//left rotate bye D
function rotatebyD(arr, D){
    let rotatedArray= []
    let arrSize= arr.length
        for(let i=0; i<D; i++){
            rotatedArray[i]= arr[i]
        }
        for(let i=d;i<arrSize; i++){
            arr[i-d]= arr[i]
        }
        for(let i=0; i<D;i++){
            arr[arrSize-D+i] = rotatedArray[i]
        } 
       return arr
}
let arr= [1,2,3,4,5]
let d=2
console.log(rotatebyD(arr,4));*/
//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]
function leftRotate(arr, d, n) {
    reverse(arr, 0, d - 1);

    reverse(arr, d, n - 1);

    reverse(arr, 0, n - 1);
     return arr
}

function reverse(arr, low, high) {
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;

        low++;
        high--;
    }
}

let arr = [1, 2, 3, 4, 5], n = 5, d = 2;
console.log(leftRotate(arr, d, n));