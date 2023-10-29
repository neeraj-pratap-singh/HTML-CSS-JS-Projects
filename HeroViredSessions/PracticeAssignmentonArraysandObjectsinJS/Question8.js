// Question 8: Object Key Search

// Description: You have an object representing a contact list. Write a function that takes a name as input and searches the contact list for the corresponding phone number. If the name is found, return the phone number; otherwise, return a message indicating that the contact does not exist.

// Input: Contact list object: { "John Doe": "123-456-7890", "Emma Smith": "987-654-3210" }, Name: "Emma Smith"

// Output: The phone number for Emma Smith is 987-654-3210.

// Function to search for a phone number by name in a contact list object
function searchContact(contactList, name) {
    if (contactList.hasOwnProperty(name)) {
      return `The phone number for ${name} is ${contactList[name]}.`;
    } else {
      return `The contact ${name} does not exist.`;
    }
  }
  
  // Sample usage
  const contactList = {
    "John Doe": "123-456-7890",
    "Emma Smith": "987-654-3210"
  };
  const nameToSearch = "Emma Smith";
  const result = searchContact(contactList, nameToSearch);
  console.log(result);  // Output should be "The phone number for Emma Smith is 987-654-3210."
  