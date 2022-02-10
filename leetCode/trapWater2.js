function trapWater(arr){
    let res=0;
    let n= arr.length;
    let leftMax= new Array(n)
    let rightMax= new Array(n)
    leftMax[0]=arr[0]
    for(let i=1;i<n;i++)
    {
            leftMax[i]= Math.max(leftMax[i-1], arr[i])
    }

    rightMax[n-1]= arr[n-1]
    for(let i=n-2; i>=0;i--)
    {
        rightMax[i]= Math.max(arr[i], rightMax[i+1])
    }
    for(let i=1; i<n-1;i++){
        res += Math.min(rightMax[i], leftMax[i])-arr[i]
    }
        

    return res
}
let arr=[3,0,1,2,5]
console.log(trapWater(arr));
