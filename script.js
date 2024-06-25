let red = document.getElementById("r");
let yellow = document.getElementById("y");
let green = document.getElementById("g");
let blue = document.getElementById("b");
let text = document.getElementById("sampletext");

red.addEventListener("click", function(){
  text.style.color = "red";
});
yellow.addEventListener("click", function(){
  text.style.color = "yellow";
});
green.addEventListener("click", function(){
  text.style.color = "lime";
});
blue.addEventListener("click", function(){
  text.style.color = "blue";
});