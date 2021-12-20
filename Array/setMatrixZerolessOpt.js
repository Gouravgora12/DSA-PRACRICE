/******Problem 5 || Approach 2(Hash Map) || Time Complexity O(n*m) || space complexity O(n+m)********/
function setZero(matrix, m,n ){
    let row = []
    let col= []
    for(let i= 0 ;i<m; i++) row[i]=false
    for(let j= 0 ;j<n; j++) col[j]=false
       
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0){ row[i]=true ;col[j]=true;}
            
        }
    }
    for(let i= 0 ;i<matrix.length; i++){
        for(j=0; j<matrix[i].length;j++){
            if(row[i] == true || col[j] == true) matrix[i][j] = 0;
        }
       
    }
    return matrix
}
let matrix= [[1,1,1],[1,0,1],[1,1,1]]
let m= matrix.length
let n= matrix[0].length
console.log( setZero(matrix,m,n))
//input
/*  1 1 1
    1 0 1
    1 1 1
//output    
    1 0 1
    0 0 0
    1 0 1
   
*/

