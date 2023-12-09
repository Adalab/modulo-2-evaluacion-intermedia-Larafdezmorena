'use strict';
//query-selector

const buttonElement=document.querySelector('.js__button');
const inputElement=document.querySelector('.js__input');
const clueElement=document.querySelector('.js__clue');
const triedElement=document.querySelector('.js__tried');

//inicio número aleatorua y contador

const randomNumber=getRandomNumber(100);
let attempts = 0;

console.log(randomNumber);

//función para el número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   };

   console.log(randomNumber);

//función para pistas

function showClue() {
    const number=parseInt(inputElement.value);
    attempts++;

        if (number===randomNumber) {
            clueElement.innerHTML = '¡Has acertado en '+attempts+' intentos! ¡Enhorabuena! ;)';
        }else if (number > 100) {
            clueElement.innerHTML = 'Tienes que elegir un número entre 1 y 100';
        }else if (number > randomNumber){
            clueElement.innerHTML = '¡Prueba con un número más bajo! XD';
        }else if (number < randomNumber) {
            clueElement.innerHTML = '¡Prueba con un número más alto! XD';
        }
        triedElement.innerHTML = 'Intentos:' + attempts;
};

//número de intentos

//triedElement.innerHTML = 'Intentos: ${attempts}';
triedElement.innerHTML = 'Intentos:' + attempts;

//listener
buttonElement.addEventListener('click' , showClue);
