//Find only one duplicate number from the array
function getDuplicate(arr){
 let seen= Array(arr.length).fill(0)
  for(let i=0;i<arr.length; i++){
      if(seen[arr[i]]==0){
          seen[arr[i]]=1
      }
      else{
          return arr[i]
      }
  }
  return -1
}
let arr=[1,2,3,4,5,7]
console.log(getDuplicate(arr))