/*
Digits: 
(I: 1), (V: 5), (X: 10), (L: 50), (C: 100), (D: 500), (M: 1000)

Expectional numbers: 
[IV: 4], [IX: 9], [XL: 40], [XC: 90], [CD: 400], [CM: 900]
*/

const convertToRoman = number => {
    let romansDigits = Object.entries({
        M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5,  I: 1 
    })
    
    .reduce( (acc, currentItem, index, array) => {
        if (index === 1) acc = [acc];
        
        let previousItem1 = array[index - 1];

        let [previousDigit1, previousValue1] = previousItem1;
        
        let [currentDigit, currentValue] = currentItem;
        
        if (! ( (previousValue1 - currentValue) === currentValue) ){
            
            let [previousDigit2, previousValue2] = array[index - 2];

            acc.push([currentDigit + previousDigit2, previousValue2 - currentValue]);

            acc.push([currentDigit + previousDigit1, previousValue1 - currentValue]);
        }

        acc.push(currentItem);
        
        return acc;
    })
    
    .sort( (a, b) => b[1] - a[1])

    .reduce( (acc, item, index) => {
        if (index === 1) {
            let temp = acc;
            acc = {};
            acc[temp[0]] = temp[1];
        }

        acc[item[0]] = item[1];

        return acc;
    });

    let romanNumerals = "";
    
    for(let key in romansDigits) {
        let value = romansDigits[key];

        while (true) {
            if (number < value) break;
            romanNumerals += key;
            number -= value;            
        }
    }

    return romanNumerals;
}