const palindrome = string => {
    const stringReplace = string.replace(/[-_.,]/gi,"");
    
    const stringSplit = stringReplace.split(/\s+/).join("");
    
    const stringToLowerCase = stringSplit.toLowerCase();
    
    const charArray = stringToLowerCase.split("");
    
    let reversedString = "";

    for (let i = charArray.length - 1; i >= 0; i--) {
        
        if (charArray[i] === "(") {
            charArray[i] = ")";
        } 

        else if (charArray[i] === ")") {
            charArray[i] = "(";
        }

        reversedString += charArray[i];
    }
 
    return stringToLowerCase === reversedString;
};