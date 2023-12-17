let navLinksOpation = document.querySelector(".nav-links-opation");
let navBar = document.querySelector(".nav-links-bar");
let logInBtn = document.querySelector(".login-button");
let singUpBtn = document.querySelector(".signup-button");
let overlay = document.querySelector(".overlay");
let loginPopupForm = document.querySelector(".login-popup-form");
let signupPopupForm = document.querySelector(".signup-popup-form");
navBar.addEventListener("click", function (e) {
  e.stopPropagation();
  if (window.getComputedStyle(navLinksOpation).display === "block") {
    navLinksOpation.style.display = "none";
  } else {
    navLinksOpation.style.display = "block";
  }
});
window.addEventListener("click", function (e) {
  e.stopPropagation();
  navLinksOpation.style.display = "none";
});

logInBtn.addEventListener("click", function (e) {
  loginPopupForm.style.display = "block";
  overlay.style.display = "block";
});
singUpBtn.addEventListener("click", function () {
  signupPopupForm.style.display = "block";
  overlay.style.display = "block";
});
overlay.addEventListener("click", function (e) {
  e.stopPropagation();
  loginPopupForm.style.display = "none";
  signupPopupForm.style.display = "none";
  overlay.style.display = "none";
});
