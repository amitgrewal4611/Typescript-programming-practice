function isIncluded(input: string, substring: string): boolean {  //Named Function

    const lowercaseInput: string = input.toLowerCase();
    const lowercaseSubstring: string = substring.toLowerCase();

    const bool: boolean = lowercaseInput.includes(lowercaseSubstring);

    return bool;
}

console.log(isIncluded("Prince Kumar Gupta", "prince"));

if (isIncluded("Amit Kumar", "arpit")) {
    console.log("is Included")
}
else {
    console.log("not Included")
}