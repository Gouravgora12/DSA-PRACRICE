/******Problem 5 || Approach 1(Brute Force) || Time Complexity O(n*m*(m+n)) ********/
function setZero(matrix){
    let copyArrray= []
    for(let i= 0 ;i<matrix.length; i++){
        let sArray=[]
        for(j=0; j<matrix[i].length;j++){
            sArray[j]=1
        }
        copyArrray.push(sArray)
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0){
                for (let k = 0; k < matrix.length; k++) {
                    copyArrray[k][j]=0  
                }
                for (let l = 0;  l< matrix[i].length; l++) {
                    copyArrray[j][l]=0  
                }
            }
        }
    }
    return matrix= copyArrray

}
let matrix= [[1,1,1],[1,0,1],[1,1,1]]
console.log( setZero(matrix))
//input
/*  1 1 1
    1 0 1
    1 1 1
//output    
    1 0 1
    0 0 0
    1 0 1
   
*/

