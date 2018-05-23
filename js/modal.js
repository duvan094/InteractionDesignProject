var outerSlider = document.getElementById("outerSlider");
console.log(outerSlider);

var signForm = document.getElementById("signForm");

var cardContainer = document.getElementById("cardContainer");


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
};

document.getElementById("modal").children[0].addEventListener("click",function(event){
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
