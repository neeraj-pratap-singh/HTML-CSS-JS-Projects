// Click event
let mydiv = document.querySelector(".sample");
let innerDivValue = 0;
mydiv.addEventListener("click", function () {
  // alert("your div has been clicked")
  // mydiv.style.color="red"
  mydiv.style.height = "200px";
  mydiv.style.width = "200px";
  // on click sample1 text should be replaced with herovired
  //    mydiv.innerText ="Herovired"
  mydiv.innerHTML = `<div style='background-color: red;height: 50px;width: 50px;'>
  ${innerDivValue}
  </div>
  
  
  <button id="btn">Increment</button>
  `;
  const btn = document.getElementById("btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    // alert("btn is clicked");
    //update the counter logic
    innerDivValue += 1
  });
});
// btn should be outside of whole blue box ;
