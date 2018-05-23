var outerSlider = document.getElementById("outerSlider");
console.log(outerSlider);

var signForm = document.getElementById("signForm");

var cardContainer = document.getElementById("cardContainer");


function closeModal(){
  modal.classList.remove("display");

};

function validateForm(event){
  event.preventDefault();

  var valid = true;

  if(valid){
    nextScreen('signUpCont',1);
  }else{
    console.log("not valid, go home!")
  }
}

function submitEmailPw(event){
  event.preventDefault();

  if(validEmail() && validPassword()){
    nextScreen('signUpCont',2);
  }else{
    console.log("Write a valid email and password dammit!");
  }
}

function validEmail(){
  return true;
}

function validPassword(){
  return true;
}

function nextScreen(container,index){
  var outerSlider = document.getElementById(container);
  var length = outerSlider.children.length;
  outerSlider.style.transform = "translate(" + (index/length)*-100 + "%, 0)";
};
