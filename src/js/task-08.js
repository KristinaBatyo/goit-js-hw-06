const form = document.querySelector('.login-form');

form.addEventListener('submit', onForm);
function onForm(event) {
event.preventDefault();
const {elements: {email, password}}= event.currentTarget;
if (email.value === "" || password.value === "") {
    return alert("Заповніть усі поля!");
} 
else {
        const user = {
          email: email.value,
          password: password.value
        };
        console.log(user);
      };
      event.currentTarget.reset();
    
    };





