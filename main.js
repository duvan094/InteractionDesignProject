
function toggleMenu(){
  document.getElementById("hamburgerBtn").classList.toggle("clicked");
  document.querySelector("nav").classList.toggle("clicked");

  document.getElementById("menu-overlay").classList.toggle("invisible");
  document.getElementById("menu-overlay").classList.toggle("visible");
}

window.addEventListener("resize",function(){
  checkIfDesktop();
});

var desktopWidth = 720;

var expandButtons = document.querySelectorAll(".expandButton");

function checkIfDesktop(){
  if(window.innerWidth >= desktopWidth){
    for(var i = 0; i < expandButtons.length; i++){
      expandButtons[i].removeEventListener("click", toggleList);
      expandButtons[i].addEventListener("click", expandMenu);
      document.getElementById("menu-overlay").removeEventListener("click",toggleMenu);
      document.getElementById("menu-overlay").addEventListener("click",closeExpandMenu);
      expandButtons[i].parentNode.children[1].style.height = "";

    }
  }else{
    for(var i = 0; i < expandButtons.length; i++){
      expandButtons[i].removeEventListener("click", expandMenu);
      expandButtons[i].addEventListener("click", toggleList);
      document.getElementById("menu-overlay").addEventListener("click",toggleMenu);
      document.getElementById("menu-overlay").removeEventListener("click",closeExpandMenu);
    }
  }
}

checkIfDesktop();


function closeExpandMenu(){
  document.querySelectorAll(".expand")[0].classList.remove("expand");
  document.getElementById("menu-overlay").classList.add("invisible");
  document.getElementById("menu-overlay").classList.remove("visible");
}

function expandMenu(event){
  event.preventDefault();
  var parent = event.target.parentNode;
  var list = parent.children[parent.children.length-1];

  var previouslyExpanded = document.querySelectorAll(".expand");

  if(previouslyExpanded.length !== 0){//Check if there are any previously expanded elements
    previouslyExpanded[0].classList.remove("expand");
    document.getElementById("menu-overlay").classList.add("invisible");
    document.getElementById("menu-overlay").classList.remove("visible");
    if(previouslyExpanded[0] !== list){
      list.classList.add("expand");
      document.getElementById("menu-overlay").classList.remove("invisible");
      document.getElementById("menu-overlay").classList.add("visible");
    }
  }else{
    list.classList.add("expand");
    document.getElementById("menu-overlay").classList.remove("invisible");
    document.getElementById("menu-overlay").classList.add("visible");
  }

}

/*A function for toggling the expandable menu (For mobile hamburger menu)*/
function toggleList(event){
  event.preventDefault();
  var parent = event.target.parentNode;
  var list = parent.children[parent.children.length-1];

  var previouslyExpanded = document.querySelectorAll(".expand");

  if(previouslyExpanded.length !== 0){//Check if there are any previously expanded elements
    previouslyExpanded[0].classList.remove("expand");
    previouslyExpanded[0].style.height = 0 + "px";
    if(previouslyExpanded[0] !== list){
      list.classList.add("expand");
      list.style.height = list.children.length * parent.children[0].offsetHeight + "px";
    }
  }else{
    list.classList.add("expand");
    list.style.height = list.children.length * parent.children[0].offsetHeight + "px";
  }
}
