const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
console.dir(input);

input.addEventListener('input', (event) => {
if (event.currentTarget.value !== '') {
    name.textContent = event.currentTarget.value;
} else {
    output.textContent = 'Anonymous';
}
});