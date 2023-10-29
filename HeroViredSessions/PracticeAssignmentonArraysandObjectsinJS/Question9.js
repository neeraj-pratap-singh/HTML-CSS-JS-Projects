// Question 9: Array Reversal

// Description: Write a function that reverses the elements of an array, without using the built-in reverse() method.

// Input: An array of strings: ["apple", "banana", "cherry"]

// Output: The reversed array: ["cherry", "banana", "apple"]


// Function to reverse an array without using built-in reverse()
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  // Sample usage
  const sampleArray = ["apple", "banana", "cherry"];
  const reversedArray = reverseArray(sampleArray);
  console.log(reversedArray);  // Output should be ["cherry", "banana", "apple"]

// Function to reverse an array using built-in reverse()
function reverseArrayWithReverse(arr) {
    return arr.reverse();
  }
  
  // Sample usage
  const sampleArrayRev = ["apple", "banana", "cherry"];
  const reversedArrayRev = reverseArrayWithReverse([...sampleArrayRev]); // Using spread operator to avoid mutating the original array
  console.log(reversedArrayRev);  // Output should be ["cherry", "banana", "apple"]
  