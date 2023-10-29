// Define an array to store electronics product information
let electronicsProducts = [
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

// Function to convert product prices to Indian Rupee (INR) using map
function convertPricesToINRWithMap() {
  // Conversion rate from USD to INR
  const conversionRate = 75;

  // Use map to create a new array with updated prices
  const convertedProducts = electronicsProducts.map(product => {
    // Split the string into components to get the details
    const details = product.split(" - ");
    const usdPrice = parseFloat(details[1]);

    // Convert the price to INR
    const inrPrice = (usdPrice * conversionRate).toFixed(2);

    // Return the updated product details
    return `${details[0]} - ${inrPrice} - ${details[2]} - ${details[3]}`;
  });

  // Update the original array with the new one
  electronicsProducts.splice(0, electronicsProducts.length, ...convertedProducts);

  return "Product prices converted to INR successfully!";
}

// Adding quantity to existing products in the electronicsProducts array
electronicsProducts = electronicsProducts.map(product => `${product} - 0`);  // Initially, set quantity as 0 for each product

// Function to update the quantity of a product in the cart
function updateQuantity(productName, quantity) {
  const index = electronicsProducts.findIndex(product => product.startsWith(productName));
  if (index !== -1) {
    const details = electronicsProducts[index].split(" - ");
    details[4] = quantity;  // Update the quantity
    electronicsProducts[index] = details.join(" - ");
  }
}

// Function to calculate the total cart value
function calculateTotalCartValue() {
  let totalValue = 0;

  for (const product of electronicsProducts) {
    const details = product.split(" - ");
    const price = parseFloat(details[1]);
    const quantity = parseInt(details[4], 10);  // Get the quantity
    if(quantity){
      totalValue += price * quantity;
    }
  }

  return `Total cart value: Rs. ${totalValue.toFixed(2)}`;
}

// Function to filter out-of-stock products
function filterInStockProducts() {
  return electronicsProducts.filter(product => {
    const details = product.split(" - ");
    const quantity = parseInt(details[4], 10);  // Get the quantity
    return quantity > 0;  // Return true if the product is in stock
  });
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

// Example usage for convertPricesToINRWithMap
const conversionResultINR = convertPricesToINRWithMap();  // Should convert all product prices to INR
console.log(conversionResultINR);

// Update quantities for some products
updateQuantity("iPhone 13 Pro", 1);
updateQuantity("Apple MacBook Pro", 1);
updateQuantity("Amazon Echo Dot", 2);
updateQuantity("Samsung Galaxy S21", 0);  // Out of stock

// Calculate the total cart value
const totalValue = calculateTotalCartValue();
console.log(totalValue);

// Filter in-stock products
const inStockProducts = filterInStockProducts();
console.log("In-stock products:", inStockProducts);

// Optional: To see the updated array
console.log(electronicsProducts);
