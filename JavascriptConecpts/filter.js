// filter povides a call function which runs for each value of array and returs a new array of values 
/*function isBigEnough(value) {
    return value >= 10
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
  console.log(filtered);*/
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));