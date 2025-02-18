export function startTimer(duration, updateTimerCallback) {
  let timeRemaining = duration;
  const timer = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      updateTimerCallback(timeRemaining); // This ensures the timer shows 00:00 after completion
    } else {
      timeRemaining--;
      updateTimerCallback(timeRemaining);
    }
  }, 1000);
  return timer; // Returning the timer ID so it can be cleared later
}

export function pauseTimer(timer) {
  clearInterval(timer); // Clears the running timer
}
