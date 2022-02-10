let nums = [30,3,34,5,9];
console.log(nums.sort().reverse());
let result = "";
let flag=0;
function printLargest(){
nums.sort((a, b)=> {
    let c = a.toString() + b.toString();
    let d = b.toString() + a.toString();
    if (d> c) {
        return 1;
    }
    if(c>d){
        return -1;
    } 
  })
  console.log(nums);
for (let i = 0; i < nums.length; i++) {
    result += nums[i]
    if(nums[i]!=0){
        flag=1
    }
}
return (flag) ? result : "0";
}
console.log(printLargest(nums));
