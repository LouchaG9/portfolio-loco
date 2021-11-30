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

// const photo = document.getElementById("profile-photo");
// const hoverTarget = document.querySelector(".about-wrap");

// function cardHover(event) {
//   // 3d hover
//   let ax = -(window.innerWidth / 2 - event.pageX) / 100;
//   let ay = (window.innerHeight / 2 - event.pageY) / 20;

//   photo.style.transform = "rotate(" + ax + "deg) rotateX(" + ay + "deg)";
// }

// photo.addEventListener("mousemove", cardHover, false);

const copyButton = document.querySelector(".clip");

copyButton.addEventListener("click", () => {
  copyText("louis.klause@gmail.com");
  toggleClass();
});

function copyText(value) {
  let tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
function toggleClass() {
  let copyAlert = document.querySelector(".alert");
  copyAlert.classList.add("visible");
  setTimeout(() => {
    copyAlert.classList.remove("visible");
  }, 1000);
}
