let counterValue = 0;

const counter = document.querySelector("#value");
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {

    counterValue -= 1;
    counter.textContent = counterValue;
});

buttonIncrement.addEventListener('click', () => {

    counterValue += 1;
    counter.textContent = counterValue;
});

