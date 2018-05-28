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

function openModal(event){
  event.preventDefault();
  document.getElementById("modal").classList.add("visible");
  document.getElementById("modal").classList.remove("invisible");
}

function closeModal(){
  document.getElementById("modal").classList.remove("visible");
  document.getElementById("modal").classList.add("invisible");
}


function enterCredentials(event){
  event.preventDefault();

  var xhttp = new XMLHttpRequest();
  var url = "users.json";

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      if(checkCredentials(response)){
        document.getElementById("formError").classList.remove("visible");
        nextScreen('signUpCont',1);
      }else{
        document.getElementById("formError").classList.add("visible");
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function checkCredentials(response){
  var form = document.forms.credentialsForm;

  var valid = true;

  for(var i = 0; i < form.length; i++){//Check so that all fields are filled.
    if(!form[i].disabled){
      if(form[i].value === ""){
        valid = false;
        form[i].parentNode.classList.add("error");
      }else{
        form[i].parentNode.classList.remove("error");
      }
    }
  }

  if(valid){//If all inputfields where entered correctly check if it matches the database
    for(var i = 0; i < response.length; i++){//Look through json string if any valid user is found
      var user = response[i];

      if(form.profession.value == "doctor" && form.svnumber.disabled !== true){

        for(var x = 0; x<finland.length; x++){
          finland[x].disabled = true;
        }

        for(var x = 0; x<svn.length; x++){
          svn[x].disabled = false;
        }

        if(form.firstName.value.toLowerCase() == user.firstName.toLowerCase() && form.lastName.value.toLowerCase() == user.lastName.toLowerCase() && form.profession.value.toLowerCase() == user.profession.toLowerCase() && form.speciality.value.toLowerCase() == user.speciality.toLowerCase()  && form.svnumber.value == user.svnumber){
          return true;
        }

      }else{
        if(form.firstName.value.toLowerCase() == user.firstName.toLowerCase() && form.lastName.value.toLowerCase() == user.lastName.toLowerCase() && form.profession.value.toLowerCase() == user.profession.toLowerCase() && form.speciality.value.toLowerCase() == user.speciality.toLowerCase()  && form.workplace.value.toLowerCase() == user.workplace.toLowerCase() && form.city.value == user.city){
          return true;
        }
      }
    }
    return false;//if no matching results found.
  }
}


function submitEmailPw(event){
  event.preventDefault();

  var form = document.forms.emailPwForm;

  var valid = true;

  for(var i = 0; i < form.length; i++){//Check so that all fields are filled.
    if(!form[i].disabled){

      if(form[i].value === ""){
        valid = false;
        form[i].parentNode.classList.add("error");
      }else{
        form[i].parentNode.classList.remove("error");
      }
    }
  }


  if(validEmail(form.email.value) && form.pw.value == form.pwConfirm.value){
    document.getElementById("emailPwError").classList.remove("visible");
    nextScreen('signUpCont',2);
  }else{
    document.getElementById("emailPwError").classList.add("visible");
  }
}

function validEmail(email){//Regex email validation
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function nextScreen(container,index){
  var outerSlider = document.getElementById(container);
  var length = outerSlider.children.length;
  outerSlider.style.transform = "translate(" + (index/length)*-100 + "%, 0)";

  if(document.getElementById(container) == document.getElementById("signUpCont")){
    updateProgressBar(index);
  }
}

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
  var finland = document.querySelectorAll("#finland input");
  var svn = document.querySelectorAll("#svn input");

  if(selectMenu.value == "doctor"){
    document.getElementById("finland").classList.add("invisible");
    document.getElementById("svn").classList.remove("invisible");

    for(var i = 0; i<finland.length; i++){
      finland[i].disabled = true;
    }

    for(var i = 0; i<svn.length; i++){
      svn[i].disabled = false;
    }

  }else{
    document.getElementById("finland").classList.remove("invisible");
    document.getElementById("svn").classList.add("invisible");

    for(var i = 0; i<finland.length; i++){
      finland[i].disabled = false;
    }

    for(var i = 0; i<svn.length; i++){
      svn[i].disabled = true;
    }
  }
}


function checkIfEmpty(event){//OnBlur event
  if(event.target.value === ""){
    event.target.parentElement.classList.add("error");
  }else{
    event.target.parentElement.classList.remove("error");
  }
}


function login(event){
  event.preventDefault();
  console.log(event);

  var form = document.forms.loginForm;

  var valid = true;

  for(var i = 0; i < form.length; i++){//Check so that all fields are filled.
      if(form[i].value === ""){
        valid = false;
        form[i].parentNode.classList.add("error");
      }else{
        form[i].parentNode.classList.remove("error");
      }
  }


  if(valid){
    if(validEmail(form.email.value)){
      document.getElementById("emailPwError").classList.remove("visible");
      window.location.href = "indexLoggedIn.html";
    }else{
      document.getElementById("loginError").classList.add("visible");
    }
  }

}
