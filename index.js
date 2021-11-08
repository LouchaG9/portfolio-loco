// LOCOMOTIVE SCROOOLLLL BABY
(function () {
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
})();

// MOUSE EVENTS ===============================================================================================================================================================================
const circle = document.getElementById("mouse-circle");
const real = document.querySelector(".real");

function mouseFollow(event) {
  //custom cursor
  circle.style.left = event.pageX + "px";
  circle.style.top = event.pageY + "px";

  // homepage text hover
  var rXP = event.pageX - real.offsetLeft - real.offsetWidth / 2;
  var rYP = event.pageY - real.offsetTop - real.offsetHeight / 2;
  real.style.textShadow =
    rYP / 20 +
    "px " +
    rXP / 160 +
    "px rgba(214, 187, 147, 0.3), " +
    rYP / 16 +
    "px " +
    rXP / 120 +
    "px rgba(138, 169, 198, 0.3), " +
    rXP / 140 +
    "px " +
    rYP / 24 +
    "px rgba(172, 136, 175, 0.3)";
}

document.addEventListener("mousemove", mouseFollow);

let eotwOpener = document.querySelector(".eotw-opener");
let eotwDialog = document.querySelector(".eotw-dialog");
let eotwCloser = document.querySelector(".eotw-closer");

function openEotwDialog() {
  eotwDialog.show();
}

function closeEotwDialog() {
  eotwDialog.hide();
}

eotwOpener.addEventListener("click", openEotwDialog);
eotwCloser.addEventListener("click", closeEotwDialog);

let creecOpener = document.querySelector(".creec-opener");
let creecDialog = document.querySelector(".creec-dialog");
let creecCloser = document.querySelector(".creec-closer");

function openCreecDialog() {
  creecDialog.show();
}

function closeCreecDialog() {
  creecDialog.hide();
}

creecOpener.addEventListener("click", openCreecDialog);
creecCloser.addEventListener("click", closeCreecDialog);

const copyButton = document.querySelector(".clip");

copyButton.addEventListener("click", () => {
  copyText("louis.klause@gmail.com");
});

function copyText(value) {
  let tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
