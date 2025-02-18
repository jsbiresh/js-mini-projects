// console.log("Jesus");

const timerText = document.getElementById("timer-text");
const toggleBtn = document.getElementById("btn-toggle");

// let timeRemaining = (2 * 60) / 6;
let timeRemaining = 2 * 60 - 30;
let isRunning = false;
let timer;

// Update Timer and Text
function updateTimer() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  timerText.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

// Start Timer
function startTimer() {
  // start or resume te timer
  isRunning = true;
  toggleBtn.textContent = "PAUSE";
  timer = setInterval(() => {
    if (timeRemaining <= 0) {
      // if timer runs out
      clearInterval(timer);
      toggleBtn.textContent = "START";
      timeRemaining = (1 * 60) / 6;
      isRunning = false;
      updateTimer();
    } else {
      // if timer still in period and is paused or continuing
      timeRemaining--;
      updateTimer();
    }
  }, 1000);
}
// Pause Timer
function pauseTimer() {
  // pause the timer
  clearInterval(timer);
  isRunning = false;
  toggleBtn.textContent = "START";
}

function toggleButtonFunction() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// Event Listeners
toggleBtn.addEventListener("click", toggleButtonFunction);
updateTimer();
// ==============================================
// ==============================================

// let timeRemaining = 25 * 60; // 25 minutes in seconds
// let timeRemaining = 1 * 60; // 1 minutes in seconds

// const timer = setInterval(() => {
//   if (timeRemaining <= 0) {
//     clearInterval(timer); // Stop the timer
//     console.log("Timer complete!");
//   } else {
//     timeRemaining--;
//     let minutes = Math.floor(timeRemaining / 60);
//     let seconds = timeRemaining % 60;
//     timerText.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
//       seconds < 10 ? "0" : ""
//     }${seconds}`;
//     // timerText.textContent = `${minutes}:${
//     //   seconds < 10 ? "0" : ""
//     // }${seconds}`;
//     console.log(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
//   }
// }, 1000); // Execute every 1 second
