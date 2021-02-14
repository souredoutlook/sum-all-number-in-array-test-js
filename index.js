function sumItems(array) {
  let sum = 0;
  for (let element of array) {
    if (element.length !== undefined) {
      sum += sumItems(element)
    } else {
      sum += element;
    }
  }
  return sum;
}

module.exports = sumItems;