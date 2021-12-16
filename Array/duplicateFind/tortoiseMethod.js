function findDuplicate(arr){
    let here=0;
    let tortoise=0;
    while(true){
        here= arr[arr[here]]
        tortoise= arr[tortoise]
        if(here==tortoise) break;
    }
    here=0
    while(here!=tortoise){
        tortoise= arr[tortoise]
        here= arr[here]
       
    }
    return here

}
let arr=[2,5,9,6,9,3,8,9,7,1]

console.log(findDuplicate(arr));
//the algo says here will move two steps while tortoise will move 1 step
