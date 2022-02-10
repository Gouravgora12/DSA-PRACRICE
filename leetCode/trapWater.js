function trapWater(arr){
    let res=0;
    let n= arr.length;
    for(let i=1; i<n-1; i++){
        let leftMax=arr[i]
        for(let j=0;j<i;j++){
            leftMax= Math.max(leftMax, arr[j])
        }
        let rightMax= arr[i]
        for(let k=i+1; k<n;k++){
            rightMax= Math.max(rightMax, arr[k])
        }
        res += Math.min(rightMax, leftMax)-arr[i]

    }
    return res
}
let arr=[3,0,1,2,5]
console.log(trapWater(arr));
