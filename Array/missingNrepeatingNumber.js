//Program to find the one missing and one repeating number in array
let arr= [1,1,2,3,4]
function findMissingNRepeatingNumber(arr){
    let result={
    }
    let newArray= Array(arr.length+1).fill(0)
    for(let i=0;i<arr.length;i++){
        newArray[arr[i]]=newArray[arr[i]]+1
    }
    for(let i=1;i<newArray.length;i++){
        if(newArray[i]==0){
            result["Duplicate number"]=i;
        }
        if(newArray[i]>1){
            result["Missing number"]=i;
        }
    } 
    return result
}
console.log(findMissingNRepeatingNumber(arr));
