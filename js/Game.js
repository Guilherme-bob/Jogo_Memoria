const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");
const grid = document.querySelector(".grid");

let currentTime = 0;

//qnd a janela carregar
window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem("player");
    startTime();
    loadGame();
};

//função para iniciar o tempo
const startTime = () => {

    this.loop = setInterval (() => {

        currentTime++;
        timer.innerHTML = currentTime;

    }, 1000);
};

//função para iniciar o tempo
const startTimer = () => {

    this.loop = setInterval(() => {

        currentTime++;
        timer.innerHTML = currentTime;

    }, 1000);
};

//array dos personagens das cartas

const characters = [
    "Carta_Planta1",
    "Planta2",
    "Planta3",
    "Planta4",
    "Planta5",
    "Zombie1",
    "Zombie2",
    "Zombie3",
    "Zombie4",
    "Zombie5"
];

//dobrando e embaralhando as carts
const duplicateCharacters = [...characters, ...characters];
const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

//função para criar elemento
const createElement = (tag,className) =>{

    const element = document.createElement(tag);
    element.className = className;
    return element;
};

//criar as cartas 
const createCard = (character) => {

    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url('../img/${character}.png')`


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-character", character);

    return card;

};

//função para carregar o jogo
const loadGame = () => {

    shuffledArray.forEach((character) => {

        const card = createCard(character);

        grid.appendChild(card);
    });
};

//Criar Variaveis para a primeira e segunda carta
let firstCard = "";
let secondCard = "";

// para revelar as carts

const revealCard = ( {target} ) => {

    if (target.parentNode.className.includes("reveal-card")) {
        
        return;
    }

    if (firstCard == "") {
        
        target.parentNode.classList.add("reveal-card");
        firstCard = target.parentNode;
    }
    else if (secondCard === "") {

        target.parentNode.classList.add("reveal-card");
        secondCard = target.parentNode;

        chackCards();
    }
};

//função para chegar as cartas

const chackCards = () => {

    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    if (firstCharacter === secondCharacter) {
        //Quando acertar as cartas
        
        firstCard.firstChild.classList.add("disabled-card");
        secondCard.firstChild.classList.add("disabled-card");

        firstCard = "";
        secondCard = "";

        checkEndGame();
    }else {
        //Quando errar as cartas
        setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = "";
            secondCard = "";
        }, 500);
    }
};

// função para fim do jogo

const checkEndGame = () => {

    clearInterval(this.loop);

    const disabledCard = document.querySelectorAll(".disabled-card");

    if (disabledCard.length === 2) {

        setTimeout(() => {
            alert("parabens"); 
        }, 600);

    }
};