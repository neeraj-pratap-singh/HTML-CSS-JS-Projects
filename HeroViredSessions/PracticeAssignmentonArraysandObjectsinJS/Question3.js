// Question 3. Array Sorting

// Description: You have an array of numbers, and you need to sort it in ascending order. Write a function that takes the array as input and returns the sorted array.

// Input: An array of numbers: [7, 2, 9, 1, 5]

// Output: The sorted array: [1, 2, 5, 7, 9]


//Normal sort method using Sort
function sortArray(arr) {
    // Use the sort method with a custom compare function for numerical sorting
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray;
  }
  
  // Sample usage
  const sampleArray = [7, 2, 9, 1, 5];
  const sortedArray = sortArray(sampleArray);
  console.log(sortedArray);  // Output should be [1, 2, 5, 7, 9]

  
// Quick sort method
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Sample usage
  const sampleArrayQS = [7, 2, 9, 1, 5];
  const sortedArrayQS = quickSort(sampleArrayQS);
  console.log(sortedArrayQS);  // Output should be [1, 2, 5, 7, 9]
  