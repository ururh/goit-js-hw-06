function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const body = document.body;

changeColor.addEventListener('click', newColor)
  
function newColor() {
  const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
        spanColor.textContent = randomColor;
      };
