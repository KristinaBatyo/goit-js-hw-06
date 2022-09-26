const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

inputSize.addEventListener('input', onInput);
function onInput (element) {
text.style.fontSize = `${element.currentTarget.value}px`;
};