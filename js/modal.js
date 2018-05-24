var outerSlider = document.getElementById("outerSlider");

var signForm = document.getElementById("signForm");

var cardContainer = document.getElementById("cardContainer");

var progressed = document.querySelectorAll(".progress-part");

var previousCard = 0;

var cards = document.querySelectorAll(".card");

window.addEventListener("resize",function(){
  resizeCards();
});

resizeCards();

function resizeCards(){
  var element = document.getElementById("modal-popup");
  var width = element.offsetWidth;

  for(var i = 0; i<cards.length; i++){
    cards[i].style.width = width + "px";
    cards[i].parentNode.style.width = width * cards[i].parentNode.children.length + "px";
  }
}


function toggleSignIn(){
  document.getElementById("sign-in").classList.add("selected");
  document.getElementById("sign-up").classList.remove("selected");
  nextScreen('logInSignUpCont',0);
}

function toggleSignUp(){
  document.getElementById("sign-up").classList.add("selected");
  document.getElementById("sign-in").classList.remove("selected");
  nextScreen('logInSignUpCont',1);
}

function openModal(){
  document.getElementById("modal").classList.add("visible");
  document.getElementById("modal").classList.remove("invisible");
};

function closeModal(){
  document.getElementById("modal").classList.remove("visible");
  document.getElementById("modal").classList.add("invisible");
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
  if(document.getElementById(container) == document.getElementById("signUpCont")){
    console.log("hej");
    updateProgressBar(index);
  }
};



function updateProgressBar(index){
  if(index < previousCard){
    for(var i = index; i <= previousCard; i++){//Clear all progress containers that are above current card.
      progressed[i].classList.remove("done");
    }
  }
  progressed[index].classList.add("done");
  previousCard = index;

}


document.getElementById("modal").children[0].children[0].addEventListener("click",function(event){
  event.stopPropagation();
});





function selectChange(){
  var selectMenu = document.getElementById( "professions" );
  if(selectMenu.value == "Doctor"){
    document.getElementById("finland").classList.add("invisible");
    document.getElementById("svn").classList.remove("invisible");
  }else{
    document.getElementById("finland").classList.remove("invisible");
    document.getElementById("svn").classList.add("invisible");
  }
};
