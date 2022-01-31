 function analog(str1, str2){
    if(str1.length!= str2.length){
        return "NO"
    }
    else{
        let charArray1= [...str1]
        let charArray2=[...str2]
        str1= charArray1.sort().join('')
        str2= charArray2.sort().join('')
        if( str1===str2) return "YES"
    }
    return "NO"   
}
// function analog(str1, str2){
//     let obj={}
//     if(str1.length!= str2.length)
//     {
//         return false
//     }
//   for(let i=0 ; i<str1.length;i++){
//       let s1= str1.charAt(i)
//       let s2=str2.charAt(i)
//       obj[s1]=  obj[s1] ? obj[s1]++ :1
//       obj[s2]=  obj[s2] ? --obj[s2] :-1  
//   }
//   for(key in obj){
//       if(obj[key]!=0){
//           return false
//       }
//   }
 
//   return true
// }


console.log(analog("b","d"));