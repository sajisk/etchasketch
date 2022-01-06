let container = document.querySelector("#mainbox");
let eraser = document.querySelector(".erase");
let clear = document.querySelector(".clear");
let rainbow = document.querySelector(".rainbow");
let restart = document.querySelector(".restart");
let slider = document.querySelector(".slider");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 3; j++) {
    let insideDiv = document.createElement("div");
    insideDiv.classList.add("inside");
    insideDiv.style.border = "2px solid #A2C11C";
    insideDiv.style.flexGrow = "1";
    insideDiv.style.flexBasis = "55px";
    container.appendChild(insideDiv);
  }
}

let divSelection = document.querySelectorAll(".inside");
divSelection.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    e.target.style.background = "gold";
  });
});

eraser.addEventListener("click", eraseDiv);
clear.addEventListener("click", clearDiv);
restart.addEventListener("click", restartDiv);
rainbow.addEventListener("click", setRandom);
// slider.addEventListener("input", rangeSlide);

function eraseDiv() {
  divSelection.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      e.target.style.background = "none";
    });
  });
}

function clearDiv() {
  divSelection.forEach((box) => {
    box.style.background = "none";
  });
}

function restartDiv() {
  return window.location.reload();
}

function getrandom() {
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)]; // #1AB346
  }
  return color;
}

function setRandom() {
  divSelection.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      e.target.style.background = getrandom();
    });
  });
}

// function rangeSlide() {
//   for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//       let insideDiv = document.createElement("div");
//       insideDiv.classList.add("inside");
//       insideDiv.style.border = "2px solid #A2C11C";
//       insideDiv.style.flexGrow = "1";
//       insideDiv.style.flexBasis = "1px";
//     }
//   }
// }
