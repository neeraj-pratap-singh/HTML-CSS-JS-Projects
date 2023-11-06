// // Function to change the color of the clicked list item
// function changeColor(element, color) {
//     element.style.color = color;
//   }
  
//   // Get all the list items
//   var listItems = document.querySelectorAll('#colorful-list li');
  
//   // Add click event listener to each list item
//   listItems.forEach(function(li) {
//     li.addEventListener('click', function() {
//       changeColor(this, 'blue'); // Change color to blue when clicked
//     });
//   });
  
// Function to change the color of all list items within the ul
function changeListItemsColor(ulElement, color) {
    var listItems = ulElement.querySelectorAll('li');
    listItems.forEach(function(li) {
      li.style.color = color;
    });
  }
  
  // Get the ul element
  var ul = document.getElementById('colorful-list');
  
  // Add click event listener to the ul element
  ul.addEventListener('click', function() {
    changeListItemsColor(this, 'blue'); // Change color to blue when ul is clicked
  });
  