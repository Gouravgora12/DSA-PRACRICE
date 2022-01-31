/*function binaryString(str){
let size= str.length
let count= 0
for(let i=0;i<size; i++){
    if(str.charAt(i)==1){
        for(let j=i+1;j<str.length; j++){
            if(str.charAt(j)==1){
                count++
               
            }
        }
    }
}
return count
}
let str="1111"
console.log(binaryString(str));
*/

function binaryString(str){
    let size= str.length
    let count= 0
    for(let i=0;i<size; i++){
        if(str.charAt(i)==1){
            count++
        }
    }
    return (count*(count-1))/2;
    }
    let str="1111"
    console.log(binaryString(str));