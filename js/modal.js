var modal = document.getElementById("modal");

function closeModal(){
  modal.classList.remove("transition");

  setTimeout(function(){
    modal.classList.remove("display");
  },300);//300milliseconds
