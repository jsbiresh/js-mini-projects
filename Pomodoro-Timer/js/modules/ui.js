// UI-related functionality (timer buttons, display)

import { startTimer, pauseTimer } from "./timer.js";
import { setTimerStyles } from "./styles.js";

let currentTimer; // To hold the current timer duration
let timer;
let isRunning = false;

export function setUpUI() {
  const timerText = document.getElementById("timer-text");
  const toggleBtn = document.getElementById("btn-toggle");
  const shortBreakBtn = document.getElementById("btn-short-break");
  const longBreakBtn = document.getElementById("btn-long-break");
  const pomodoroBtn = document.getElementById("btn-pomodoro");

  // Set default timer to Pomodoro (25 mins)
  currentTimer = 25 * 60;
  updateTimerDisplay(currentTimer, timerText);
  setTimerStyles("short-break");

  toggleBtn.addEventListener("click", () => toggleTimer(toggleBtn, timerText));
  pomodoroBtn.addEventListener("click", () =>
    switchTimer(25 * 60, "pomodoro", timerText, toggleBtn)
  );
  shortBreakBtn.addEventListener("click", () =>
    switchTimer(5 * 60, "short-break", timerText, toggleBtn)
  );
  longBreakBtn.addEventListener("click", () =>
    switchTimer(10 * 60, "long-break", timerText, toggleBtn)
  );
}

function toggleTimer(toggleBtn, timerText) {
  if (isRunning) {
    pauseTimer(timer);
    toggleBtn.textContent = "START";
  } else {
    toggleBtn.textContent = "PAUSE";
    timer = startTimer(currentTimer, (timeRemaining) =>
      updateTimerDisplay(timeRemaining, timerText)
    );
    isRunning = true;
  }
}

function switchTimer(newTime, style, timerText, toggleBtn) {
  currentTimer = newTime;
  setTimerStyles(style);
  updateTimerDisplay(currentTimer, timerText);
  if (isRunning) {
    pauseTimer(timer);
    toggleBtn.textContent = "START";
    isRunning = false;
  }
}

function updateTimerDisplay(timeRemaining, timerText) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerText.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}
