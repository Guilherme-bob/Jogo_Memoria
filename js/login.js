const form = document.querySelector(".login-form");
const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");

const validateInput = ({target}) => {

    if (target.value.length > 2) {

        button.removeAttribute('disabled')
        return;
        
    }

    button.setAttribute('disabled', '')

}

const handSubmit = (event) => {

    event.preventDefault();

    localStorage.setItem('player', input.value);
    input.value = "";

    window.location = "pages/Game.html"

};

form.addEventListener("submit", handSubmit);
input.addEventListener('input', validateInput);