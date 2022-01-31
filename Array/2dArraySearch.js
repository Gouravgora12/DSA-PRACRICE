let matrix=[[1,2,3],[4,5,6],[7,8,9]]
//let matrix= [[1,1]]
function findX( matrix, target) {
    if(matrix.length == 0) return false;
    let low =0
    let m= matrix.length
    let n = matrix[0].length
    let heigh= (m*n)-1
    while (low<=heigh) {
        let mid= parseInt((low+heigh)/2)
        let i= parseInt(mid/m)
        let j= parseInt(mid%m)
        if(matrix[i][j] == target){
            return true
        }
        else if(matrix[i][j]>target){
            heigh=mid-1
        }
        else{
            low=mid+1
        }
    }
    return false 
}