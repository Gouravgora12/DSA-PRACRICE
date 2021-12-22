function createPattern(n) {
    for (let i = n; i > 0; i--) {
        let pattern = ''
        for (let j =0; j < n - i; j++) {
            pattern = pattern + " "
        }
        for (let k = i; k > 0; k--) {
            pattern = pattern + " " + k
        }
        console.log(pattern);
    }
}
createPattern(5)