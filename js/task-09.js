function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');


changeColorBtn.addEventListener('click', onChange);
function onChange () {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}