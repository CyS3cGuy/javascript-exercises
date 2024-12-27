const removeFromArray = function(arr) {
    let filteredArr = arr;
    for (let i = 1; i < arguments.length; i++) {
        filteredArr = filteredArr.filter((e) => {
            return e !== arguments[i];
        })
    }

    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
