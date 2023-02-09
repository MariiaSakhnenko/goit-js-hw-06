function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');
const body = document.body;

colorButton.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = body.style.backgroundColor;
});
