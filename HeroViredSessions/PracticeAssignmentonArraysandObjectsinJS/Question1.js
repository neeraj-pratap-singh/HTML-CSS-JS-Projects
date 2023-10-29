// Question 1: Count occurrences of elements in an array

// Skill Mapping: Basic

// Description: Write a JavaScript function that takes an array as input and counts the occurrences of each element in the array. Return an object with element counts.

// Sample Input   :           [1, 2, 3, 2, 4, 1, 5]

// Output             :           { 1: 2, 2: 2, 3: 1, 4: 1, 5: 1 }

function countOccurrences(arr) {
    const counts = {};
  
    // Use forEach to iterate through each element in the array
    arr.forEach(element => {
      // If the element is already a key in the 'counts' object, increment its value
      if (counts[element] !== undefined) {
        counts[element]++;
      } else {
        // Otherwise, add the element as a key in the 'counts' object and set its value to 1
        counts[element] = 1;
      }
    });
  
    return counts;
  }
  
  // Sample usage
  const sampleArray = [1, 2, 3, 2, 4, 1, 5];
  const result = countOccurrences(sampleArray);
  console.log(result);  // Output should be { 1: 2, 2: 2, 3: 1, 4: 1, 5: 1 }
  