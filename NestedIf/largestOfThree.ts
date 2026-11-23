function largestNumber(numb1 : number ,numb2 : number , numb3 :number){
    if (numb1 > numb2){
        if (numb1 > numb3){
            console.log("numb1 is largest")
        }
        else{
                console.log("numb3 is largest")
        }
    
    }
    else{
        if(numb2 > numb3 ){
            console.log("numb2 is largest ")
        }
        else{
            console.log("numb3 is largest")
        }
    }
}



largestNumber(8,4,12);