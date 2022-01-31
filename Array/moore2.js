
function majority(arr) {
    let size = arr.length;
    let n1=-1
    let n2=-1
    let c1=0
    let c2=0
    for (let i = 0; i < size; i++) {
        if(arr[i]==n1){
            c1++
        }
        else if(arr[i]==n2){
            c2++
        }
        else if(c1==0){
            n1= arr[i]
            c1=1
        }
        else if(c2==0){
           n2= arr[i]
           c2=1
        }
        else{
            c1--
            c2--

        }

    }
    return [n1, n2]
}
let a = [1,1,1,3,3,2,2,2]
console.log(majority(a));