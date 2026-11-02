"use strict";

const images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

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

images.forEach((imgNum) => {
  const imgBox = document.createElement("div");

  imgBox.innerHTML = `<img src="./img/${imgNum}.png" alt="program-lang">`;

  allIMG.prepend(imgBox);
});
