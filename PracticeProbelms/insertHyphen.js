var num = "124688765438";
let str=""
let strLength= num.length
for(let i = 0 ; i <strLength-1 ; i++) {
     if(num.charAt(i)%2==0 && num.charAt(i+1)% 2==0){
        str +=num.charAt(i) + num.charAt(i+1)
        str += "-"
        i++
     }
     else{
         str += num.charAt(i)
     }
     
}
console.log(str);