let mat=[[1,2,3],[4,5,6]]

function transposeMatrix(mat){
    let result=[]
    for(let i=0;i<mat[0].length;i++){
        result[i]=[]
        for(let j=0;j<mat.length;j++){
            result[i][j]=mat[j][i]
        }
    }
    return result
}

console.log(transposeMatrix(mat))