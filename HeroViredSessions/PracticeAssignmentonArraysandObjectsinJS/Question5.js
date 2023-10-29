// Question 5. Problem: Merge two sorted arrays into a single sorted array

// Description: Write a JavaScript function that takes two sorted arrays as input and merges them into a single sorted array. The resulting array should contain all the elements from both input arrays in ascending order.

// Example:

// Input: [1, 3, 5], [2, 4, 6]

// Output: [1, 2, 3, 4, 5, 6]

//2 point approach
// Function to merge two sorted arrays into a single sorted array
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
  
    // While there are elements in both arrays
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1, add them to the merged array
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    // If there are remaining elements in arr2, add them to the merged array
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
  // Sample usage
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const mergedArray = mergeSortedArrays(arr1, arr2);
  console.log(mergedArray);  // Output should be [1, 2, 3, 4, 5, 6]

  
//Using predefine function of js
// Function to merge two sorted arrays into a single sorted array
function mergeSortedArrays(arr1, arr2) {
    // Concatenate the two arrays and sort them
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    return merged;
  }
  
  // Sample usage
  const arr3 = [1, 3, 5];
  const arr4 = [2, 4, 6];
  const mergedArrayNew = mergeSortedArrays(arr3, arr4);
  console.log(mergedArrayNew);  // Output should be [1, 2, 3, 4, 5, 6]
  