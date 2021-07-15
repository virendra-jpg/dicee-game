var f1 = Math.random();
var randomNumber1 = Math.floor(6 * f1) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImagesrc = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImagesrc);


var f2 = Math.random();
var randomNumber2 = Math.floor(6 * f2) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImagesrc2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImagesrc2);




//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
