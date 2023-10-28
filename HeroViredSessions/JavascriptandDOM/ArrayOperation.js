// Arrays in JavaScript offer a wide range of built-in methods for different operations. Here's a brief overview of some common operations you can perform on arrays:

// ### Adding Elements

// - `push()`: Adds one or more elements to the end of an array and returns the new length.
  
  let arr = [1, 2, 3];
  arr.push(4); // Output: [1, 2, 3, 4]
  console.log('Array data', arr)
  
  
// - `unshift()`: Adds one or more elements to the beginning of an array and returns the new length.
  
  arr.unshift(0); // Output: [0, 1, 2, 3, 4]
  console.log('Array data', arr)
  

// ### Removing Elements

// - `pop()`: Removes the last element from an array and returns that element.
  
  arr.pop(); // Output: [0, 1, 2, 3]
  console.log('Array data', arr)
  
  
// - `shift()`: Removes the first element from an array and returns that element.
  
  arr.shift(); // Output: [1, 2, 3]
  console.log('Array data', arr)
  

// ### Iterating Over Elements

// - `forEach()`: Executes a provided function once for each array element.
  
  arr.forEach(element => console.log(element));
  
  
// ### Searching

// - `indexOf()`: Returns the first index at which a given element can be found.
  
  arr.indexOf(2); // Output: 1
  
  
// - `find()`: Returns the value of the first element that satisfies the provided testing function.
  
  arr.find(element => element > 2); // Output: 3
  
  
// ### Transforming

// - `map()`: Creates a new array with the results of calling a provided function on every element.
  
  arr.map(element => element * 2); // Output: [2, 4, 6]
  
  
// - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
  
  arr.filter(element => element > 1); // Output: [2, 3]
  
  
// ### Reducing

// - `reduce()`: Applies a function against an accumulator and each element in the array to reduce it to a single value.
  
  arr.reduce((acc, val) => acc + val, 0); // Output: 6
  

// ### Checking

// - `some()`: Checks if at least one element in the array passes the test implemented by the provided function.
  
  arr.some(element => element > 2); // Output: true
  
  
// - `every()`: Checks if all elements in the array pass the test implemented by the provided function.
  
  arr.every(element => element > 0); // Output: true
  

// ### Slicing and Splicing

// - `slice()`: Returns a shallow copy of a portion of an array.
  
  arr.slice(1, 3); // Output: [2, 3]
  
  
// - `splice()`: Changes the contents of an array by removing or replacing existing elements.
  
  arr.splice(1, 1, 10); // Output: [1, 10, 3]
  
  
// ### Sorting and Reversing

// - `sort()`: Sorts the elements of an array.
  
  arr.sort(); // Output: [1, 3, 10]
  
  
// - `reverse()`: Reverses the elements of an array.
  
  arr.reverse(); // Output: [10, 3, 1]
  