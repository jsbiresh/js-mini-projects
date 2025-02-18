export function setTimerStyles(timerType) {
  const container = document.querySelector(".container");
  const counterContainer = document.querySelector(".counter-container");

  switch (timerType) {
    case "pomodoro":
      container.style.backgroundColor = "#BA4949";
      counterContainer.style.backgroundColor = "#BE575C";
      break;
    case "short-break":
      container.style.backgroundColor = "#48858A";
      counterContainer.style.backgroundColor = "#539196";
      break;
    case "long-break":
      container.style.backgroundColor = "#397097";
      counterContainer.style.backgroundColor = "#4A7EA2";
      break;
    default:
      container.style.backgroundColor = "#BA4949";
  }
}
