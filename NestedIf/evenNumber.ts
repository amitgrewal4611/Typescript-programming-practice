function even(value1 :number){
    if (value1 > 0){
        console.log( "Positive number")
        
        if (value1 %2==0){
            console.log("its an even number")
        }
        else {console.log ("is an odd number")}
        
    }
     else {console.log("invalid number")}

}
even(70);