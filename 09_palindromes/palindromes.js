const palindromes = function (str) {
    let lowerStrArr = str.toLowerCase()
                         .split('')
                         .filter(char => char >= "a" && char <= "z" || char >= "0" && char <="9");
    
    let reverseStrArr = lowerStrArr.slice(0).reverse();

    return lowerStrArr.join('') === reverseStrArr.join('');
};

// Do not edit below this line
module.exports = palindromes;
