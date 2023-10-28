// Define an array to store electronics product information
const electronicsProducts = [
    "iPhone 13 Pro - 999 - Smartphones - In Stock",
    "Samsung Galaxy S21 - 799 - Smartphones - In Stock",
    "Sony WH-1000XM4 - 278 - Headphones - Out of Stock",
    "Apple MacBook Pro - 2399 - Laptops - In Stock",
    "Dell XPS 13 - 999 - Laptops - In Stock",
    "Apple iPad Pro - 799 - Tablets - In Stock",
    "Amazon Echo Dot - 49 - Smart Home Devices - In Stock",
    "Nikon D3500 - 496 - Cameras - Out of Stock",
    "LG OLED55C1PUB - 1496 - Televisions - In Stock",
    "PlayStation 5 - 499 - Gaming Consoles - Out of Stock"
  ];
  
  // Function to access and display product details by index
  function getProductDetails(index) {
    // Check if the index is within the bounds of the array
    if (index >= 0 && index < electronicsProducts.length) {
      // Return the product details at the given index
      return electronicsProducts[index];
    } else {
      // Return an error message if the index is out of bounds
      return "Index out of bounds. Please provide a valid index.";
    }
  }
  
  // Example usage
  const details = getProductDetails(2);  // Should return details for Sony WH-1000XM4
  console.log(details);
  