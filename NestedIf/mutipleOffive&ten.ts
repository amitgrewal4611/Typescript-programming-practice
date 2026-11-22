function multiple(value1: number) {
    if (value1 %5==0){
        if (value1 %10==0){
            console.log("The number is multiple of both 5 & 10")
        }
        else {console.log ("The number is multiple of 5 but not 10")}
    }

    else {console.log("The number is not a multiple of five or ten")}
}
multiple(55);

   

