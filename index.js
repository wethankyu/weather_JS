const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  // const currentClass = title.classList;
  // if (currentClass.contains(CLICKED_CLASS)) {
  //   title.classList.remove(CLICKED_CLASS);
  // }
  // else {
  //   title.classList.add(CLICKED_CLASS);
  // }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();

