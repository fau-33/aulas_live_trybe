const filterOdd = (numbers) => {
  return numbers.filter((number) => number % 2 !== 0);
}

//console.log(filterOdd([1, 2, 3, 4, 5]));

// um modo de fazer
/* const oddNumbers = [];
  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers; */

module.exports = {
  filterOdd,
}