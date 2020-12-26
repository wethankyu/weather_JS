const body = document.querySelector("body");

const IMG_NUMBER = 3;

function genRandomNum() {
  const randomNum = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return randomNum;
}

// something to do with APIs ?
// function handleImgLoad() {
//   console.log("finished loading");
// } 

// function paintImage(imgNumber) {
//   const image = new Image();
//   image.src = `images/${imgNumber}.jpg`
//   image.classList.add("bgImage");
//   body.appendChild(image);
//   image.addEventListener("loadend", handleImgLoad)
// } // somehow slow when loading

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`
  image.classList.add("bgImage");
  image.onload = function () { // display bg as it's loaded fully.
    body.appendChild(image);
  }
  // image.addEventListener("loadend", handleImgLoad)
}

function init() {
  const randomNum = genRandomNum();
  paintImage(randomNum);
}

init();