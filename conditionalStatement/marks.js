const promt=require("prompt-sync")()

const marks=Number(promt("ENter your marks  "))


if((marks>100) || (marks<0)){
    console.log("envalid marks")
}

else if(marks>=90 &&   marks<=100){
    console.log("A grade")
}
else if(marks>=60 && marks<=89){
    console.log("B grade")
}

else if(marks>=33 && marks<60){
    console.log("C grade")
}

else{
    console.log("fail")
}

