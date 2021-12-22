function createPattern(n){
    for(let i=1;i<=n;i++){
        let pattern= ''
       for(let j=n-i;j>0;j--){
        pattern= pattern+ " "
       }
       for(let k=1;k<=i;k++){
           pattern=pattern+ " "+k
       }
       console.log(pattern);
    }
}
createPattern(5)