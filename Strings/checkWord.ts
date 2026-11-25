function checkword(value1 : string , value2 : string){
    
    const lowercaseInput = value1.toLowerCase();
    const lowercaseSubstring = value2.toLowerCase(); 
    
    if (lowercaseInput.includes(lowercaseSubstring)){
        console.log("The word is present")

    }
    else{
        console.log("The word is not present ")
    }
}
checkword("my name iS amit" , "IS");
