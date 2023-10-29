// Question 4. Prime Numbers Count

// Description: Write a program that takes a range of numbers as input and counts the number of prime numbers within that range.

// Input: Range of numbers: 1 to 20

// Output: The number of prime numbers: 8

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Function to count the number of prime numbers within a given range
  function countPrimesInRange(start, end) {
    let count = 0;
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Sample usage
  const start = 1;
  const end = 20;
  const numberOfPrimes = countPrimesInRange(start, end);
  console.log(`The number of prime numbers between ${start} and ${end} is: ${numberOfPrimes}`);  // Output should be 8
  