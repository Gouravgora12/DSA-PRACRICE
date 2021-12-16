//Approch 3 for merge two sorted array by gap method
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
function gap(g){
    if(g<=1){
        return 0
    }
    else{
         return parseInt(g/2)+g%2
    }
}
function main(arr1, arr2, n, m) {
    let i,j
    let g=m+n
    for(g=gap(g);g>0; g=gap(g)){
        for (i = 0; i +g< n; i++) {
            if(arr1[i]>arr1[i+g]){
                let swapped=swap(arr1[i], arr1[i+g])
                arr1[i]=swapped[0]
                arr1[i+g]=swapped[1]
            }
        }
        for (j = g>n?g-n:0; i<n && j< m; i++,j++) {
            if(arr1[i]>arr2[j]){
                let swapped=swap(arr1[i], arr2[j])
                arr1[i]=swapped[0]
                arr2[j]=swapped[1]
            }
        }
        if(j<m){
            for(j=0; j+g<m;j++){
                if(arr2[j]>arr2[j+g]){
                    let swapped=swap(arr2[j], arr2[j+g])
                    arr2[j]=swapped[0]
                    arr2[j+g]=swapped[1]
                }
            }
            
        }

    }
    

    }



main(arr1, arr2, m, n)
console.log(arr1, arr2);