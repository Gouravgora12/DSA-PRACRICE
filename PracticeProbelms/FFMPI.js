// find first missing postive integer
function findElement(nums){
    let size= nums.length
    let obj={

    }
    for(let i=1; i<=size;i++){
        obj[i]=0
    }
    for(let i=0;i<size;i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]]=1
        }
    }
    for(key in obj){
        if(obj[key]<1){
           return key;
        }
    }
    return 0
} 
let nums=[1]
console.log(findElement(nums));