// Question 1: Manipulating array using Map and Filter and Reduce

// Points: 10

// Skill Mapping: Basic
// Description: Consider a Loyalty Application for a Small Retailer, where data is stored in array of objects -

// customerID, customerName, totalBillingAmount

// A Retailer would want select customers who have the total Billing amount more than Rs. 3000/-

// Write a program using your JavaScript Skills to print the list of Such Customer Names along with their purchase details.

// Sample data for Loyalty Application
const customers = [
    { customerID: 1, customerName: "Neeraj", totalBillingAmount: 2000 },
    { customerID: 2, customerName: "Ajay", totalBillingAmount: 3500 },
    { customerID: 3, customerName: "Sunita", totalBillingAmount: 1200 },
    { customerID: 4, customerName: "Ishani", totalBillingAmount: 4000 },
    { customerID: 5, customerName: "Sohail", totalBillingAmount: 2700 }
  ];
  
  // Filter customers with totalBillingAmount greater than Rs. 3000
  const filteredCustomers = customers.filter(customer => customer.totalBillingAmount > 3000);
  
  // Map to get names and purchase details
  const customerDetails = filteredCustomers.map(customer => ({
    Name: customer.customerName,
    Purchase: customer.totalBillingAmount
  }));
  
  // Reduce to print details
  const printDetails = customerDetails.reduce((acc, curr) => {
    return acc + `Customer Name: ${curr.Name}, Purchase Amount: Rs. ${curr.Purchase}\n`;
  }, "List of Customers with Purchase over Rs. 3000:\n");
  
  // Print the details
  console.log(printDetails);
  