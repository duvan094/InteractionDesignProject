var slider = document.querySelector(".hero-slider");

for(var i = 1; i<slider.children.length; i++){
  slider.children[i].classList.add("next");
}

slider.children[0].classList.add("current");

var index = 0;

function nextSlide(){
  if(index+1 < slider.children.length){
    slider.children[index].classList.remove("current");
    slider.children[index].classList.add("previous");

    index += 1;//Increase index

    slider.children[index].classList.remove("next");
    slider.children[index].classList.add("current");
  }
}

function previousSlide(){
  if(index > 1){
    slider.children[index].classList.remove("current");
    slider.children[index].classList.add("next");

    index -= 1;//Increase index

    slider.children[index].classList.remove("previous");
    slider.children[index].classList.add("current");
  }
}
