"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
const checkButtonEl = document.querySelector(".check");
const againBulltonEl = document.querySelector(".again");
const secretNumberEl = document.querySelector(".number");
const inputEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const bodyEl = document.querySelector("body");
let score = 20;
let highScore = 0;

const handleIncorrectGuess = function (str) {
  if (score > 1) {
    messageEl.textContent = `${str}`;
    score--;
    scoreEl.textContent = score;
  } else {
    messageEl.textContent = "🎭 You lost the game!";
    scoreEl.textContent = 0;
  }
};

const handleCorrectGuess = function () {
  secretNumberEl.textContent = secretNumber;
  secretNumberEl.style.width = "30rem";
  bodyEl.style.backgroundColor = "#60b347";
  if (score > highScore) {
    highScore = score;
    highScoreEl.textContent = highScore;
  }
  score = 20;
  messageEl.textContent = "🎉 Correct!";
};

checkButtonEl.addEventListener("click", function () {
  const inputElementValue = Number(inputEl.value);

  if (!inputElementValue) {
    messageEl.textContent = "⚠️ No number entered!";
  } else if (inputElementValue > secretNumber) {
    handleIncorrectGuess("📈 Too high!");
  } else if (inputElementValue < secretNumber) {
    handleIncorrectGuess("📉 Too Low!");
  } else if (inputElementValue === secretNumber) {
    handleCorrectGuess();
  }
});

againBulltonEl.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "#222";
  secretNumberEl.style.width = "15rem";
  messageEl.textContent = "Start guessing...";
  inputEl.value = "";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  secretNumberEl.textContent = "?";
  score = 20;
  scoreEl.textContent = score;
});
