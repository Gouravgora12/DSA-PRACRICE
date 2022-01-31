function reverse(num) {
    let reverse= 0
    let temp= num
    num = Math.abs(num)
    let max= Math.pow(2,31)
    if(num==0 || num>max ){
        return 0
    }
    let r=0
    while(num>0){
        r= num%10
        num= parseInt(num/10)
        reverse= (reverse*10)+r
    }
    if(reverse>max){
        return 0
    }
    return temp<0? -(reverse): reverse
}
console.log( reverse(123));
