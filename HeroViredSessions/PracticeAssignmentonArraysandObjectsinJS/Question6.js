// Question 6: Factorial Calculation

// Description: Write a function that calculates the factorial of a given positive integer.

// Input: 6

// Output: The factorial of 6 is 720.

// Optimized Approach: Iterative Method
// Iterative function to calculate factorial
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Sample usage
  const num = 6;
  const factorialResult = factorialIterative(num);
  console.log(`The factorial of ${num} is ${factorialResult}`);  // Output should be 720

  
// Function Approach: Recursive Method
// Recursive function to calculate factorial
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }
  
  // Sample usage
  const num1 = 6;
  const factorialResultRec = factorialRecursive(num1);
  console.log(`The factorial of ${num} is ${factorialResultRec}`);  // Output should be 720
  