// LOCOMOTIVE SCROOOLLLL BABY
var scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.05,
});

const projectAnchor = document.querySelector(".project");
const projectLinks = document.querySelectorAll(".project-link");
projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", () => {
    scroll.scrollTo(projectAnchor);
  });
});

const aboutAnchor = document.querySelector(".about-anchor");
const aboutLinks = document.querySelectorAll(".about-link");
aboutLinks.forEach((aboutLink) => {
  aboutLink.addEventListener("click", () => {
    scroll.scrollTo(aboutAnchor);
  });
});

const homeAnchor = document.querySelector("#home");
const homeLinks = document.querySelectorAll(".home-link");
homeLinks.forEach((homeLink) => {
  homeLink.addEventListener("click", () => {
    scroll.scrollTo(homeAnchor);
  });
});
