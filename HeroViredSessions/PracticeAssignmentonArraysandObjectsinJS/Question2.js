// Question 2: Find the average of numbers in an array

// Skill Mapping: Basic

// Description - Write a JavaScript function that takes an array of numbers as input and calculates the average value of the numbers.

// Sample Input   :           [5, 10, 15, 20]

// Output             :           12.5 (average of 5, 10, 15, and 20)


function findAverage(arr) {
    let sum = 0;
  
    // Use forEach to sum up all elements in the array
    arr.forEach(element => {
      sum += element;
    });
  
    // Calculate the average
    const average = sum / arr.length;
  
    return average;
  }
  
  // Sample usage
  const sampleArray = [5, 10, 15, 20];
  const average = findAverage(sampleArray);
  console.log(average);  // Output should be 12.5
  