/*let arr= [0,0,1,1,1,2,2,3,3,4]
function removeDuplicate(arr) {
    let size= arr.length
    let obj={}
    for(let i=0;i<size;i++){
        if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]]= arr[i]
        }
        else{
            arr[i]=-1
        }
    }
   console.log(arr.sort((a,b)=>{
       console.log(a,b);
       if(a!=-1 && b>a){
           return b-a
       }
       if(a==-1){
           return b-a
       }
      
   }));  
}
removeDuplicate(arr)*/
let arr= [0,0,1,1,1,2,2,3,3,4]
function removeDuplicate(arr) {
    let size= arr.length
    let i=0
    let j=1
    while(j<size){
        if(arr[i]==arr[j]){
            j++
        }
        else{
            i++
            arr[i]= arr[j]
           
        }
       
    }
    while(i<size){
        arr[i]="_"
        i++
    }
    return arr
   
}
console.log(removeDuplicate(arr));

