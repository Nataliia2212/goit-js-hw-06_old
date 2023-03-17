function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  color: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body')
}

refs.button.addEventListener('click', onButtonChangeColor)

function onButtonChangeColor(event) {
  const bodyColor = getRandomHexColor()

  refs.body.style.backgroundColor = bodyColor;
  refs.color.textContent = `${bodyColor}`
}