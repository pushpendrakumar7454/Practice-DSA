let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function diagonalSum(mat){
    let sum=0

    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(i==j || i+j==mat[i].length-1) sum+=mat[i][j]
        }
    }
    return sum
}

console.log(diagonalSum(mat))