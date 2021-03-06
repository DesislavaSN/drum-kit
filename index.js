var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSounds(buttonInnerHTML);
    animation(buttonInnerHTML);

  })
}

document.addEventListener("keydown", function(event){
  var pressedButton = event.key;
  makeSounds(pressedButton);
  animation(pressedButton);
})

function animation(activeButton){
  var animatedButton = document.querySelector("."+activeButton);
  animatedButton.classList.add("pressed");
  setTimeout(function(){
    animatedButton.classList.remove("pressed");
  }, 100);
}

function makeSounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:

  }
}
