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

images.forEach((imgNum) => {
  const imgBox = document.createElement("div");

  imgBox.innerHTML = `<img src="./img/${imgNum}.png" alt="program-lang">`;

  allIMG.prepend(imgBox);

  imgBox.className = "block";
});

// ====================<< Show selected box >>====================
const allBlocks = document.querySelectorAll(".block");

allBlocks.forEach((selectedBlock) => {
  selectedBlock.addEventListener("click", () => {
    selectedBlock.classList.toggle("show");

    const shownCards = [...allBlocks].filter((block) =>
      block.classList.contains("show"),
    ).length;
    if (shownCards >= 2) {
      setInterval(() => {
        selectedBlock.classList.remove("show");
      }, 1000);
    }
  });
});
