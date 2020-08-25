var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.getElementById("button");


function setGradient () {
    body.style.background= 
    "linear-gradient( to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    ")";
    css.textContent= body.style.background + ";";
}

function randomColor(){
    var random= "#"+((1<<24)*Math.random()|0).toString(16)
    return random;
  }

  function BackgroundColor(){
      color1.value=randomColor();
    color2.value=randomColor();
    setGradient();
  }



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click",BackgroundColor);