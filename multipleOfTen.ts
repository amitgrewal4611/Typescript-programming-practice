function multiply(value1 : number){
    if(value1 <10){
        console.log("invalid data")
    }
    else if (value1 %10==0 ){
        console.log("divisibleof 10")
    }
    else{console.log ("not a divisible of 10")}
}
multiply(22);