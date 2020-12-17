$(".w").on("click", pressedW);
$(".a").on("click", pressedA);
$(".s").on("click", pressedS);
$(".d").on("click", pressedD);
$(".j").on("click", pressedJ);
$(".k").on("click", pressedK);
$(".l").on("click", pressedL);
function pressedW() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  $(".w").fadeOut(50).fadeIn(50);
}
function pressedA() {
  var audio = new Audio("sounds/tom-2.mp3");

  audio.play();
  $(".a").fadeOut(50).fadeIn(50);
}
function pressedS() {
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
  $(".s").fadeOut(50).fadeIn(50);
}
function pressedD() {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  $(".d").fadeOut(50).fadeIn(50);
}
function pressedJ() {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  $(".j").fadeOut(50).fadeIn(50);
}
function pressedK() {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  $(".k").fadeOut(50).fadeIn(50);
}
function pressedL() {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  $(".l").fadeOut(50).fadeIn(50);
}
$(document).on("keypress", (ev) => hadleKey(ev));
function hadleKey(ev) {
  const key = ev.key;
  if (key == "W" || key == "w") pressedW();
  if (key == "A" || key == "a") pressedA();
  if (key == "S" || key == "s") pressedS();
  if (key == "D" || key == "d") pressedD();
  if (key == "J" || key == "j") pressedJ();
  if (key == "K" || key == "k") pressedK();
  if (key == "L" || key == "l") pressedL();
}
