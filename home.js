/**
 * This function is used to click the splash screen which will open the home page.
 */
function clickScreen() {
  let splashScreen = document.getElementById("splash-screen");
  let homePage = document.getElementById("home-page");
  splashScreen.style.opacity = "0";
  splashScreen.style.transition = "opacity 1.5s ease";

  setTimeout(() => {
    splashScreen.style.display = "none";
    homePage.classList.remove("hidden");
    document.getElementById("birds-sound").play();
  }, 500);
}
