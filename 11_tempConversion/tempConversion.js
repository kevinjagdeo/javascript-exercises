const convertToCelsius = function (num) {
  let celc = ((num - 32) * 5) / 9;
  return parseFloat(celc.toFixed(1));
};

const convertToFahrenheit = function (num) {
  let faren = (num * 9) / 5 + 32;
  return parseFloat(faren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
