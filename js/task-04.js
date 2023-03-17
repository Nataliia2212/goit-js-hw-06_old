let counterValue = 0;

const refs = {
    increment: document.querySelector('button[data-action="increment"]'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    value: document.querySelector('#value')
}

refs.increment.addEventListener('click', onIncrement);
refs.decrement.addEventListener('click', onDecrement);

function onIncrement() {
    counterValue += 1
    refs.value.textContent = counterValue
}

function onDecrement(event) {
    counterValue -= 1
    refs.value.textContent = counterValue
}