const rot13Letter = letter => {
    const isUpperCase = letter === letter.toUpperCase();

    letter = letter.toLowerCase();

    let letterCode = letter.charCodeAt() + 13;

    const [min, max] = ["a".charCodeAt(), "z".charCodeAt()];;

    if (max < letterCode) {

        letterCode -= max;
        
        letterCode += min - 1;
    }

    letter = String.fromCharCode(letterCode);

    letter = isUpperCase?letter.toUpperCase():letter;

    return letter;
}

const rot13 = (string) => (
    string.replace(
        /[A-Z]/gi, 
        letter => rot13Letter(letter)
    )
);