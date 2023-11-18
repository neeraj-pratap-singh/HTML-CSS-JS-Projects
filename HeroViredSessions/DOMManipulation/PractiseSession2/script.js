document.getElementById("submitButton").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    if (inputText.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = inputText;
        document.getElementById("list").appendChild(listItem);
        document.getElementById("inputText").value = ""; // Clear the input box after adding
    }
});
