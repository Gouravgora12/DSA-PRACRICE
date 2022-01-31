function leaders(arr){
    let n= arr.length
    if(n==1){
        return [-1]
    }
    let max= arr[n-1]
    let leaders= [arr[n-1]]
    for(let i=n-1; i>=0;i--){
        if(arr[i]>max){
            max= arr[i]
            leaders.push(arr[i]);
        }
        leaders.push(max);
    }
    return leaders
}
let arr=[7,10,4,3,6,5,2]
leaders(arr);