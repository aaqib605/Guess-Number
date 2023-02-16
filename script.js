"use strict";

// Generating a random number between [0, 20]
const secretNumber = Math.floor(Math.random() * 20) + 1;
const checkButtonEl = document.querySelector(".check");
const secretNumberEl = document.querySelector(".number");
const inputEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const bodyEl = document.querySelector("body");
let score = 20;
let highScore;

secretNumberEl.textContent = secretNumber;

checkButtonEl.addEventListener("click", function () {
  const inputElementValue = Number(inputEl.value);

  if (!inputElementValue) {
    messageEl.textContent = "⚠️ No number entered";
  } else if (inputElementValue > secretNumber) {
    if (score > 1) {
      messageEl.textContent = "Too high!";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "☹️ You lost the game!";
      scoreEl.textContent = 0;
    }
  } else if (inputElementValue < secretNumber) {
    if (score > 1) {
      messageEl.textContent = "Too Low!";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "☹️ You lost the game!";
      scoreEl.textContent = 0;
    }
  } else if (inputElementValue === secretNumber) {
    secretNumberEl.style.width = "25rem";
    bodyEl.style.backgroundColor = "#60b347";
    highScore = score;
    score = 20;
    highScoreEl.textContent = highScore;
    messageEl.textContent = "🎉 Correct!";
  }
});
