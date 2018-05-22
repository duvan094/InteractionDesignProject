var outerSlider = document.getElementById("outerSlider");
console.log(outerSlider);

var signForm = document.getElementById("signForm");

var cardContainer = document.getElementById("cardContainer");


function closeModal(){
  modal.classList.remove("display");

};

function nextScreen(container,index){
  var outerSlider = document.getElementById(container);
  var length = outerSlider.children.length;
  outerSlider.style.transform = "translate(" + (index/length)*-100 + "%, 0)";
  console.log((index/length)*-100);
  console.log("hi");
};


function nextCard(){
  signForm.style.transform = "translate(-20%, 0)";
  console.log("suckadic");
};

function nextOne(){
  cardContainer.style.transform = "translate(-20%, 0)";
  console.log("please");
};
