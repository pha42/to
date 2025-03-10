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

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function welcomeFunc() {
  console.log("Welcome");
  document.documentElement.style.setProperty("--gif-opacity", 1);
  document.documentElement.style.setProperty("--text-opacity", 0);
  await wait(1000);
  document.getElementById("display-text").textContent = "My love hellooo, if you're here that means you found the little secret that was hidden in the letter. Good job baby. I love you so muchh. See you at the next surprise. Take care my princess.💙";
  await wait(1000);
  document.documentElement.style.setProperty("--text-opacity", 1);
  document.removeEventListener("click", event);
}
async function leaveFunc() {
  console.log("Leave");
  document.documentElement.style.setProperty("--img-opacity", 1);
  document.documentElement.style.setProperty("--text-opacity", 0);
  await wait(1000);
  document.getElementById("display-text").textContent = "YOU NEED TO LEAVE NOW!!!!!!";
  await wait(1000);
  document.documentElement.style.setProperty("--text-opacity", 1);
  document.removeEventListener("click", );
}

document.addEventListener("DOMContentLoaded", () => {
  let baseVolume = 0.5;
  const shayla = "media/shayla.mp3";
  const leave = "media/leave.mp3";

  // Define the click handler as a named function
  function handleClick(event) {
    const clickedEl = event.target.closest("#opt-left, #opt-right");
    if (!clickedEl) return;

    // Remove the listener immediately after the first valid click
    document.removeEventListener("click", handleClick);

    const clickId = clickedEl.id;
    let sound = "";
    switch (clickId) {
      case "opt-left":
        sound = shayla;
        welcomeFunc();
        break;
      case "opt-right":
        sound = leave;
        leaveFunc();
        break;
    }
    if (sound) {
      const audio = new Audio(sound);
      audio.volume = baseVolume;
      audio.play();
    }
  }

  // Add the listener
  document.addEventListener("click", handleClick);
});
