const sumAll = function (min, max) {
  let totalSum = 0;
  // Handle negative numbers
  if (min < 0 || max < 0) return "ERROR";
  // Handle case if max is less than min
  if (min > max) [min, max] = [max, min];
  // Handle case if number isn't an int
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  for (let i = min; i <= max; i++) {
    totalSum += i;
  }
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
