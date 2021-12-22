function createPattern(n){
    for(let i=1;i<=n;i++){
        let start=''
        for(let j=1;j<=i;j++){
            start = start+" "+j
        }
        console.log(start);
    }
}
createPattern(5)