// Select the div and button elements
let mydiv = document.querySelector(".sample");
let innerDivValue = 0;

// Function to update the inner div content
function updateInnerDiv() {
  mydiv.innerHTML = `<div style='background-color: red; height: 50px; width: 50px;'>${innerDivValue}</div>`;
}

// Click event for the div
mydiv.addEventListener("click", function () {
  mydiv.style.height = "200px";
  mydiv.style.width = "200px";
  updateInnerDiv();
});

// Select the button by ID and add click event
document.getElementById("btn").addEventListener("click", function () {
  innerDivValue += 1;
  updateInnerDiv();
});
