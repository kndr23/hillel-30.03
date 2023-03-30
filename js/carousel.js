const carouselContainer = document.querySelector(".image-container");
const leftButton = document.querySelector(".carousel-left");
const rightButton = document.querySelector(".carousel-right");

let track = 0;
let counter = 1;

const banners = new Array(4);

window.addEventListener("load", () => {
  for (let i = 0; i < banners.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("image-wrapper");

    let newImg = document.createElement("img");
    newImg.classList.add("carousel-image");
    newImg.src = `./assets/banner${i + 1}.jpeg`;

    newDiv.appendChild(newImg);
    carouselContainer.appendChild(newDiv);
  }

  return (wrapperOne = document.querySelector(".image-wrapper"));
});

const moveImagesRight = () => {
  if (counter === 1) return;

  counter--;
  track = track + 100;
  wrapperOne.style.marginLeft = track + "%";
};

const moveImagesLeft = () => {
  if (counter === banners.length) return;

  counter++;
  track = track - 100;
  wrapperOne.style.marginLeft = track + "%";
};

leftButton.addEventListener("click", () => moveImagesRight());

rightButton.addEventListener("click", () => moveImagesLeft());
