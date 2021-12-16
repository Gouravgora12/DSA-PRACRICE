//Merge two sorted Array array the resulting sorted array according to numbers
let arr1=[1,2,5,8]
let arr2=[3,6,7]
//let mergedAray=[...arr1,...arr2]
let mergedAray= arr1.concat(arr2)
console.log(mergedAray.sort());
function sort(mergedAray){
    let j=0;
    for(let i=0;i<mergedAray.length;i++){
       
        if(i<arr1.length){
            arr1[i]=mergedAray[i]
        }
        else{
            arr2[j]=mergedAray[i]
            j++
        }
    }
   
}
sort(mergedAray,...arr1,...arr2)
console.log(arr1,arr2);
