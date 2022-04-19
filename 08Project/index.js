const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {

  //console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;

    console.log(firstCard);
    console.log(secondCard);
  checkIt();
  }
}

const checkIt = () => {
    // console.log("Checking...");
  firstCard.dataset.image === secondCard.dataset.image ? success() : fail()
}
//     ;
//   } else {
//     ;

// authenticated ? console.log("SignOut Button") : console.log("Login");}

const success = ()=> {
    console.log("Success");
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

const fail = () => {
    console.log("Failed");
    setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

const reset = ()=> {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

// //TODO: shuffle
// (function shuffle() {
//   cards.forEach((card) => {
//     var index = Math.floor(Math.random() * 16);
//     card.style.order = index;
//   })
// })();

window.addEventListener('load', ()=> {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  })
});