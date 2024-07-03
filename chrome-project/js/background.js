const images = ["bg_01.jpg","bg_02.jpg","bg_03.jpg","bg_04.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.alt = "";

document.querySelector(".background").appendChild(bgImage);




