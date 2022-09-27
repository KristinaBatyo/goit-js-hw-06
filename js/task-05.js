const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.dir(input);

input.addEventListener('input', (event) => {
if (event.currentTarget.value !== '') {
    output.textContent = event.currentTarget.value;
} else {
    output.textContent = 'Anonymous';
}
});

