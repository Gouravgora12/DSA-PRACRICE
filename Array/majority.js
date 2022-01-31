
function majority(a) {
    let obj = {}
    let max = -1
    let majorityElement = -1
    let size = a.length;
    for (let i = 0; i < size; i++) {
        if (obj.hasOwnProperty(a[i])) {
            obj[a[i]] = obj[a[i]] + 1
        }
        else {
            obj[a[i]] = 1
        }
    }
    for (key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            majorityElement = key
        }
    }
    return max> size/2 ? majorityElement:-1
}
let a = [18,6, 1, 15, 19, 9 ,13, 12, 6 ,7 ,2 ,10, 4, 1, 14, 11, 14, 14, 13]
console.log(majority(a));