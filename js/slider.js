var slider = document.querySelector(".hero-slider");

for(var i = 1; i<slider.children.length; i++){
  slider.children[i].classList.add("next");
}

slider.children[0].classList.add("current");

var progressContainer = document.getElementById("sliderProgress");

for(let i = 0; i<slider.children.length; i++){
  let button = document.createElement("button");
  button.addEventListener("click", function(event){
    getSlide(i);
  },false);

  progressContainer.appendChild(button);
}

progressContainer.children[0].classList.add("active");


var index = 0;

function getSlide(slideIndex){
  slider.children[slideIndex].classList.remove("previous");
  slider.children[slideIndex].classList.remove("next");
  slider.children[slideIndex].classList.add("current");

  progressContainer.children[index].classList.remove("active");
  index = slideIndex;
  progressContainer.children[index].classList.add("active");

  for(var i = 0; i<slideIndex; i++){
    slider.children[i].classList.add("previous");
    slider.children[i].classList.remove("current");
    slider.children[i].classList.remove("next");
  }

  for(var i = slider.children.length-1; i>slideIndex; i--){
    slider.children[i].classList.add("next");
    slider.children[i].classList.remove("current");
    slider.children[i].classList.remove("previous");
  }
}

function nextSlide(){
  if(index < slider.children.length-1){
    getSlide(index+1);
  }
}

function previousSlide(){
  if(index > 0){
    getSlide(index-1);
  }
}
