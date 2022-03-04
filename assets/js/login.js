// login event

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const containerLoginPage = document.querySelector(".container-loginpage");

sign_up_btn.addEventListener("click", () => {
  containerLoginPage.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  containerLoginPage.classList.remove("sign-up-mode");
});