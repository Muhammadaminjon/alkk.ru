let burger = document.querySelector(".burger");
let menu = document.querySelector(".header");
let xbtn = document.querySelector(".x-btn");
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
xbtn.addEventListener("click", () => {
  menu.classList.remove("show");
});

const tl = gsap.timeline(5);

window.addEventListener("load", () => {
  tl.from(".site-logo", {
    x: -700,
    opacity: 0,
    duration: 1.35,
  });
  tl.from(".header__top-wrapper", {
    x: 700,
    opacity: 0,
    duration: 1.35,
  });
  tl.from(".header__nav__item", {
    y: 200,
    opacity: 0,
    duration: 0.75,
    stagger: 0.35,
  });
  tl.from(".header-nav__slash", {
    duration: 0.35,
    opacity: 0,
  });
});
