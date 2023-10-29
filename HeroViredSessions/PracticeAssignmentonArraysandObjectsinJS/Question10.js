// Question 10: Object Property Update

// Description: You have an object representing a student record. Write a function that takes the student object and a new grade as input and updates the grade property with the new value.

// Input: Student object: { name: "John", grade: 85 }, New grade: 90

// Output: The updated student object: { name: "John", grade: 90 }


// Function to update the grade of a student object
function updateStudentGrade(student, newGrade) {
    student.grade = newGrade;
    return student;
  }
  
  // Sample usage
  const student = { name: "John", grade: 85 };
  const newGrade = 90;
  const updatedStudent = updateStudentGrade(student, newGrade);
  console.log(updatedStudent);  // Output should be { name: "John", grade: 90 }
  