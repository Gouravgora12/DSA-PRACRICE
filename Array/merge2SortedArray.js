//Approch 2 for merge two sorted array
let arr1 = [1, 2, 5, 8]
let arr2 = [3, 6, 7]
let m = arr1.length
let n = arr2.length
//swap without third variable
function swap(a, b) {
    a = a + b   //a=10 b=20 then a+b=30  
    b = a - b  // 30-20=10
    a = a - b //30-10=20
    return [a, b]

}
//function to sort Array on a condition that only the zeroIndex value is not sorted
function sortArr2(arr2, zeroIndex) {
    let i;
    for (i = 1; i < n && arr2[i] < zeroIndex; i++) {
        arr2[i - 1] = arr2[i]
    }
    arr2[i - 1] = zeroIndex
}
function main(arr1, arr2, m, n) {
    for (let i = 0; i < m; i++) {
        if (arr1[i] > arr2[0]) {
            let swaped = swap(arr1[i], arr2[0])
            arr1[i] = swaped[0]
            let firstIndexOFArr2 = arr2[0] = swaped[1]
            sortArr2(arr2, firstIndexOFArr2)
        }
    }
}


main(arr1, arr2, m, n)
console.log( arr1, arr2);