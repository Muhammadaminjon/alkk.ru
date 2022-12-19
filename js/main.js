let burger = document.querySelector(".burger");
let menu = document.querySelector(".header");
let xbtn = document.querySelector(".x-btn");
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
xbtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
