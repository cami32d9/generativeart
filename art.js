"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Consoling");
  transformArt();
}

function transformArt() {
  for (let counter = 100; counter <= 300; counter++) {
    if (counter % 20) continue;
    artwork1.innerHTML += `<div class="box" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }

  for (let counter = 0; counter <= 90; counter++) {
    if (counter % 10) continue;
    artwork2.innerHTML += `<div class="box" style="transform: rotate(${counter}deg);"></div>`;
  }

  for (let counter = 0; counter <= 200; counter++) {
    if (counter % 10) continue;
    artwork3.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }

  for (let counter = -90; counter <= 90; counter++) {
    if (counter % 20) continue;
    artwork4.innerHTML += `<div class="box" style="transform: translate(${counter}px,${counter}px);"></div>`;
  }

  for (let counter = 1; counter < 512; counter += counter) {
    artwork5.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }

  for (let counter = -20; counter < 45; counter++) {
    if (counter % 5) continue;
    artwork6.innerHTML += `<div class="circle" style="transform: translateX(${counter -
      50}px) rotate(${counter * 4}deg);"></div>`;
  }

  for (let counter = 0; counter < 200; counter++) {
    if (counter % 10) continue;
    artwork7.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px; transform: translate(${counter}px, ${-counter /
      2}px);"></div>`;
  }

  for (let counter = 50; counter < 200; counter++) {
    if (counter % 10) continue;
    artwork8.innerHTML += `<div class="box" style="width: ${counter}px; height: ${counter}px; transform: translateX(${counter /
      2}px) rotate(${counter}deg);"></div>`;
  }

  for (let counter = 50; counter < 200; counter++) {
    if (counter % 30) continue;
    artwork9.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px;"></div>`;
    artwork9.innerHTML += `<div class="box" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }
}
