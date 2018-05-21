
function toggleMenu(){
  document.getElementById("hamburgerBtn").classList.toggle("clicked");
  document.querySelector("nav").classList.toggle("clicked");

  document.getElementById("menu-overlay").classList.toggle("invisible");
  document.getElementById("menu-overlay").classList.toggle("visible");
}


/*A function for toggling the expandable menu*/
function toggleList(event){
  var parent = event.target.parentNode;
  var list = parent.children[parent.children.length-1];

  var previouslyExpanded = document.querySelectorAll(".expand");

  if(previouslyExpanded.length !== 0){//Check if there are any previously expanded elements
    previouslyExpanded[0].classList.remove("expand");
    previouslyExpanded[0].style.height = 0 + "px";
    if(previouslyExpanded[0] !== list){
      list.classList.add("expand");
      list.style.height = list.children.length * parent.offsetHeight + "px";
    }
  }else{
    list.classList.add("expand");
    list.style.height = list.children.length * parent.offsetHeight + "px";
  }


}
