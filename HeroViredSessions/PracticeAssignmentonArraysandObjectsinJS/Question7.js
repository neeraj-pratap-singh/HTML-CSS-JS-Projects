// Question 7: Array Element Sum

// Description: You are given an array of numbers. Write a program that calculates the sum of all the elements in the array.

// Input: An array of numbers: [4, 9, 2, 5, 1]

// Output: The sum of the elements is 21.

// Function to calculate the sum of all elements in an array using reduce()
function arraySum(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }
  
  // Sample usage
  const sampleArray = [4, 9, 2, 5, 1];
  const sum = arraySum(sampleArray);
  console.log(`The sum of the elements is ${sum}`);  // Output should be 21
  