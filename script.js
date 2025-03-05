let currentDeg = 0;
function animateGradient() {
  currentDeg = (currentDeg + 1) % 360;
  document.documentElement.style.setProperty(
    "--border-deg",
    currentDeg + "deg"
  );
  requestAnimationFrame(animateGradient);
}
animateGradient();

document.addEventListener("DOMContentLoaded", function () {
  let displayedText = "";
  let arrayText = ["Are you bla bla", "are 1", "are 2", "are 3", "are 4"];
  let i = 0;
  document.body.addEventListener("mousedown", (event) => {
    const optionId = event.target.id;
    switch (optionId) {
      case "opt-1":
        displayedText = arrayText[0];
        break;
      case "opt-2":
        displayedText = arrayText[1];
        break;
    }
  });
});
