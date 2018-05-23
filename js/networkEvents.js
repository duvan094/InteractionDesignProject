

function expandEvent(event){
  event.target.parentNode.children[0].classList.toggle("clicked");
  event.target.parentNode.children[1].classList.toggle("clicked");
}
