function getDuplicate(arr){
 let seen={}
  for(let element of arr){
      if(seen.hasOwnProperty(element))
        {
          return element
         }
      else
        {
             seen[element]=element
        }
  };
  return -1
 
}
let arr=[1,2,3,4,5,1];
console.log(getDuplicate(arr))