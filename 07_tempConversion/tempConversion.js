const convertToCelsius = function(fht) {
  return Math.round((fht - 32) * 5 * 10 / 9) / 10
};

const convertToFahrenheit = function(clc) {
  return Math.round(10 * ((clc * 9 / 5) + 32)) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
