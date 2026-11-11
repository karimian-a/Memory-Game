"use strict";

const images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

// ====================<< Randomizing array indexes >>====================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
  }
  return arr;
}
shuffleArray(images);

// ====================<< Show random image >>====================
const allIMG = document.querySelector(".blocks");

function showRandomImg() {
  images.forEach((imgNum) => {
    const imgBox = document.createElement("div");

    imgBox.innerHTML = `<img src="./img/${imgNum}.png" alt="program-lang">`;

    allIMG.prepend(imgBox);

    imgBox.dataset.num = imgNum;
    imgBox.className = "block";
  });
}
showRandomImg();

// ====================<< Play Round >>====================
// select all blocks
let allBlocks = document.querySelectorAll(".block");

// play round data
let selectId = [];
let selectEl = [];
let canPlay = true;
let score = 0;

function clickHandel() {
  allBlocks.forEach((selectedBlock) => {
    selectedBlock.addEventListener("click", () => {
      if (!canPlay) return;

      // show selected block
      selectedBlock.classList.add("show");

      // set play round data
      selectEl.push(selectedBlock);
      selectId.push(selectedBlock.dataset.num);

      // call match block function
      matchBlock(selectEl, selectId);
    });
  });
}
clickHandel();
// match blocks
function matchBlock(el, id) {
  if (id.length >= 2) {
    // can play is false
    canPlay = false;

    // if matched
    if (id[0] === id[1]) {
      el.forEach((element) => {
        setTimeout(() => {
          element.classList.add("true");
        }, 500);
      });

      score++;
    }
    // if not matched
    else {
      el.forEach((wrong) => {
        setTimeout(() => {
          wrong.classList.remove("show");
        }, 1000);
      });
    }

    // reset play round data
    el.length = 0;
    id.length = 0;

    // can play is true
    setTimeout(() => {
      canPlay = true;
    }, 800);
  }

  // if the user wins
  win(score);
}
