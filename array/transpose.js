let mat=[[1,2,3],[4,5,6]]



function transeposeMatrix(mat){
    let row=mat.length;
    let col=mat[0].length
    let arr=new Array(col)

    for(let i=0;i<col;i++){
        arr[i]=new Array(row)
    }

    for(let i=0;i<col;i++){
        for(let j=0;j<row;j++){
            arr[i][j]=mat[j][i]
        }
    }
    return arr


}
console.log(transeposeMatrix(mat))

// function transposeMatrix(mat){

//     let result=[]
    
//     for(let i=0;i<mat[0].length;i++){
//         result[i]=[]
//         for(let j=0;j<mat.length;j++){
//             result[i][j]=mat[j][i]
//         }
//     }
//     return result
// }

// console.log(transposeMatrix(mat))