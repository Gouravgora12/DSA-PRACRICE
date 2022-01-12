//it work on a conecpt that you will increemnt the i until you get the i smaller then j
//if i> j you will increemnt the j to continue the result in sorted form
function union(arr1, arr2) {
    let n1= arr1.length ,n2= arr2.length;
    let i=j=0;
    while(i<n1&& j<n2){
        if(i>0 && arr1[i]==arr1[i-1]) {i++; continue;}
        if(j>0 && arr1[j]==arr1[j-1]) {j++; continue;}
        if(arr1[i]<arr2[j]){
           
          
            
            i++;
        }
        else if(arr1[i]>arr2[j]){
           
          
            
            j++;
        }
        else{
            console.log(arr1[i]);
            i++; j++;
        }
    }
   
}
let arr1=[1, 3, 4, 5, 7]
let arr2=[2, 3,4,5, 6]
union(arr1, arr2)