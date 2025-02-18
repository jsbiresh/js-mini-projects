// Timer logic
export function startTimer(duration, updateTimerCallback) {
  let timeRemaining = duration;
  const timer = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      updateTimerCallback();
    } else {
      timeRemaining--;
      updateTimerCallback(timeRemaining);
    }
  }, 1000);
}

export function pauseTimer(timer) {
  clearInterval(timer);
}
