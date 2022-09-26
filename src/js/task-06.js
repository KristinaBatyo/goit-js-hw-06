const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', onInput);

function onInput (event) {
    const isValid = event.currentTarget.value.length === Number (inputLength);
    
    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid')
    }
}


