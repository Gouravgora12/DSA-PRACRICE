let arr=[[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]

function mergeOverLap(intervals){
    intervals= intervals.sort((a,b)=>{return a[0]-b[0]})
    let newIntervalArray=[intervals[0]]
    let size= intervals.length
    for(let i=1;i<size;i++){
        let rl= newIntervalArray.length-1
        if(intervals[i][0]>=newIntervalArray[rl][0]&& intervals[i][0]<=newIntervalArray[rl][1]){
            if(intervals[i][1]>=newIntervalArray[rl][1]){
                newIntervalArray[rl][1]=intervals[i][1]  
            }   
        }
        else{
            newIntervalArray.push(intervals[i])
        }
    }
  return newIntervalArray
}
console.log(mergeOverLap(arr))