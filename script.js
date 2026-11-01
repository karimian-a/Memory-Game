"use strict";

const images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
  }
  return arr;
}
console.log(shuffleArray(images));