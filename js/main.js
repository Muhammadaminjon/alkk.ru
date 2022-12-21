window.addEventListener("load", () => {
  gsap.from(".site-logo", {
    x: -500,
    opancity: 0,
    duration: 1,
  });
  gsap.from(".header__nav__item", {
    y: -200,
    opancity: 0,
    duration: 1,
    delay: .5,
    stagger: 0.35,
  });
  gsap.from(".header__top-wrapper", {
    x: 500,
    opancity: 0,
    duration: 1,
  });
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header");
let xbtn = document.querySelector(".x-btn");
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
xbtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
