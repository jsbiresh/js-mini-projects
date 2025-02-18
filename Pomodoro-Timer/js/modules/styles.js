// Timer style management (background colors, etc.)

export function setTimerStyles(timerType) {
  //   const body = document.body;
  const container = document.querySelector(".container");
  console.log(`Changing background color to ${timerType}`); // Log to check if this is triggered
  switch (timerType) {
    case "pomodoro":
      container.style.backgroundColor = "#BA4949";
      break;
    case "short-break":
      container.style.backgroundColor = "#48858A";
      break;
    case "long-break":
      container.style.backgroundColor = "#397097";
      break;
    default:
      container.style.backgroundColor = "#BA4949";
  }
}
