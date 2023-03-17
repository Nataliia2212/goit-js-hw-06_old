function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes: document.querySelector('#boxes'),
  amount: document.querySelector('input'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]')
}

refs.amount.addEventListener('input', gettAmount)
refs.create.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', onButtonDestroy);

let amount = 0;

function gettAmount(event) {
  amount = event.currentTarget.value;
}



function createBoxes() {
  const markur = [];
  
  for (let i = 0; i < amount; i += 1){
  const div = document.createElement('div')
  const size = 30 + 10 * i;

  div.style.height = `${size}px`;
  div.style.width = `${size}px`;
  div.style.backgroundColor = getRandomHexColor();
     
  markur.push(div)
  }
  refs.boxes.append(...markur)
}

function onButtonDestroy() {
   refs.boxes.innerHTML=''
 }