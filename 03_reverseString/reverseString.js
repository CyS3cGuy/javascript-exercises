const reverseString = function(str) {
    const splitArr = str.split('');
    let txt = '';
    for (let i = splitArr.length - 1; i >= 0 ; i--) {
        txt += splitArr[i];
    }

    return txt;
};

// Do not edit below this line
module.exports = reverseString;
