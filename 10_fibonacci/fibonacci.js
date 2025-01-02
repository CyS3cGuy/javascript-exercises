const fibonacci = function(val) {

    if (+val === 1 || +val === 2) {
        return 1;
    } else if (+val === 0) {
        return 0;
    } else if (+val < 0) {
        return "OOPS";
    }

    return fibonacci(+val - 1) + fibonacci(+val - 2);
};

// Do not edit below this line
module.exports = fibonacci;
