//Reverse Pyramid pattern
function createPattern(n){
    for(let i=n;i>0;i--){
        let start=''
        for(let j=i;j>0;j--){
            start = start+" "+j
        }
        console.log(start);
    }
}
createPattern(15)