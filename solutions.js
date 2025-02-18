// Sum of Two Numbers
function sum(a, b) {
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  const vowels = /[aeiouAEIOU]/g;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
