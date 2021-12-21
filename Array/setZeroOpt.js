/******Problem 5 || Approach 3(Marker) || Time Complexity O(n*m) || space complexity O(1)********/
function setZero(matrix, m, n) {
    let firstRow = false
    let firstCol = false
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] == 0) firstRow = true
    }
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] == 0) firstCol = true
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }

    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }

    }
    if (firstRow) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0
        }
    }
        if (firstCol) {
            for (let j = 0; j < m; j++) {
                matrix[j][0] = 0
            }
        }
    return matrix
}
//let matrix =[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
let matrix= [[1],[0],[3]]
let m = matrix.length
let n = matrix[0].length
console.log(setZero(matrix, m, n))
//input
/*  1 1 1
    1 0 1
    1 1 1
//output    
    1 0 1
    0 0 0
    1 0 1
   
*/

