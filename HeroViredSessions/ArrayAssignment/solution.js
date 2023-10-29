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

// Function to add a new product
function addProduct(productDetails) {
  electronicsProducts.push(productDetails);
  return "Product added successfully!";
}

// Function to remove a product by index
function removeProduct(index) {
  // Check if the index is within the bounds of the array
  if (index >= 0 && index < electronicsProducts.length) {
    // Remove the product at the given index
    electronicsProducts.splice(index, 1);
    return "Product removed successfully!";
  } else {
    // Return an error message if the index is out of bounds
    return "Index out of bounds. Please provide a valid index.";
  }
}

// Function to remove products that are "Out of Stock"
function removeOutOfStockProducts() {
  // Loop backward through the array
  for (let i = electronicsProducts.length - 1; i >= 0; i--) {
    // Split the string into components to get the stock status
    const details = electronicsProducts[i].split(" - ");
    const stockStatus = details[3];

    // Check if the product is "Out of Stock" and remove it
    if (stockStatus === "Out of Stock") {
      electronicsProducts.splice(i, 1);
    }
  }
  return "Out of Stock products removed successfully!";
}

// Function to calculate the total price of products in a specific category
function calculateTotalPriceByCategory(category) {
  let totalPrice = 0;

  // Loop through the array
  for (let i = 0; i < electronicsProducts.length; i++) {
    // Split the string into components to get the details
    const details = electronicsProducts[i].split(" - ");
    const productCategory = details[2];
    const price = parseFloat(details[1]);

    // Add the price to the total if the product is in the target category
    if (productCategory === category) {
      totalPrice += price;
    }
  }

  return `Total price of products in category ${category}: $${totalPrice}`;
}

// Function to sort the products by price
function sortProductsByPrice() {
  electronicsProducts.sort((a, b) => {
    const priceA = parseFloat(a.split(' - ')[1]);
    const priceB = parseFloat(b.split(' - ')[1]);
    return priceA - priceB;
  });
  return "Products sorted by price successfully!";
}

// Function to generate a report summarizing product information
function generateProductReport() {
  const categoryCounts = {};

  // Loop through the array
  for (let i = 0; i < electronicsProducts.length; i++) {
    // Split the string into components to get the category
    const details = electronicsProducts[i].split(" - ");
    const category = details[2];

    // Increment the count for this category
    if (categoryCounts.hasOwnProperty(category)) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  }

  // Generate the report
  let report = "Product Report:\n";
  for (const [category, count] of Object.entries(categoryCounts)) {
    report += `${category}: ${count} products\n`;
  }

  return report;
}


// Example usage for getProductDetails
const details = getProductDetails(2);  // Should return details for Sony WH-1000XM4
console.log(details);

// Example usage for addProduct
const addResult = addProduct("Apple Watch - 399 - Wearables - In Stock");  // Should add a new product to the array
console.log(addResult);

// Example usage for removeProduct
const removeResult = removeProduct(4);  // Should remove the product at index 4 (Dell XPS 13) from the array
console.log(removeResult);

// Example usage for removeOutOfStockProducts
const removeOutOfStockResult = removeOutOfStockProducts();  // Should remove all products that are "Out of Stock"
console.log(removeOutOfStockResult);

// Example usage for sortProductsByPrice
const sortResult = sortProductsByPrice();  // Should sort the products by price
console.log(sortResult);

// Example usage for generateProductReport
const report = generateProductReport();  // Should generate a summary report
console.log(report);

// Optional: To see the updated array
console.log(electronicsProducts);
