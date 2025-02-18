// // console.log("Jesus");
// // Main entry point to link everything together

import { setUpUI } from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  setUpUI();
});

// =======================================================
// const timerText = document.getElementById("timer-text");
// const toggleBtn = document.getElementById("btn-toggle");

// let startUpTime = (1 * 60) / 6;
// let timeRemaining = startUpTime;
// let isRunning = false;
// let timer;

// // Update Timer and Text
// function updateTimer() {
//   let minutes = Math.floor(timeRemaining / 60);
//   let seconds = timeRemaining % 60;
//   timerText.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;
// }

// // // Start Timer
// // function startTimer() {
// //   // start or resume te timer
// //   isRunning = true;
// //   toggleBtn.textContent = "PAUSE";
// //   timer = setInterval(() => {
// //     if (timeRemaining <= 0) {
// //       // if timer runs out
// //       clearInterval(timer);
// //       toggleBtn.textContent = "START";
// //       timeRemaining = startUpTime;
// //       isRunning = false;
// //       updateTimer();
// //     } else {
// //       // if timer still in period and is paused or continuing
// //       timeRemaining--;
// //       updateTimer();
// //     }
// //   }, 1000);
// // }
// // Pause Timer
// function pauseTimer() {
//   // pause the timer
//   clearInterval(timer);
//   isRunning = false;
//   toggleBtn.textContent = "START";
// }

// function toggleButtonFunction() {
//   if (isRunning) {
//     pauseTimer();
//   } else {
//     startTimer();
//   }
// }

// // Event Listeners
// toggleBtn.addEventListener("click", toggleButtonFunction);
// updateTimer();
// // ==============================================
