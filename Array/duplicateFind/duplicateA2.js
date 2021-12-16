function getDuplicate(arr){
     for (let i=0; i<arr.length ; i++){
        if(arr[i]>0){
            arr[i]=-arr[i]   
        }
     };
     console.log(arr);
     return -1
    
   }
   let arr=[1,2,3,4,5,1];
   console.log(getDuplicate(arr))