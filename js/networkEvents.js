
var eventSliders = document.querySelectorAll(".eventSlider");

window.addEventListener("resize",function(){
  resizeSlider();
});

resizeSlider();

function resizeSlider(){
  var element = document.querySelector(".eventList");
  var width = element.offsetWidth;
  console.log(width);
  for(var i = 0; eventSliders.length; i++){

      for(var x = 0; x < eventSliders[i].children.length; x++){
        eventSliders[i].children[x].style.width = width + "px";
      }

      eventSliders[i].style.width = width * eventSliders[i].children.length + "px";
  }

}




function expandEvent(event){
  event.preventDefault();
  event.target.parentNode.children[0].classList.toggle("clicked");
  event.target.parentNode.children[1].classList.toggle("clicked");
}


function eventConf(container,index){
  var slideEvent = document.getElementById(container);
  var length = slideEvent.children.length;
  slideEvent.style.transform = "translate(" + (index/length)*-100 + "%, 0)";
  console.log("hehe");
}

function closeEvent(event){
  event.preventDefault();
  event.target.parentNode.parentNode.parentNode.children[0].classList.remove("clicked");
  event.target.parentNode.parentNode.parentNode.children[1].classList.remove("clicked");
  console.log("fuckallyall");
}
