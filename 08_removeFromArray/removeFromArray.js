const removeFromArray = function (array, ...toRemove) {
  const newArr = array.filter((item) => !toRemove.includes(item));

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
