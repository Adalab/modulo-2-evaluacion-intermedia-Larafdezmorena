'use strict';
//query-selector

const buttonElement=document.querySelector('.js__button');
const inputElement=document.querySelector('.js__input');
const clueElement=document.querySelector('.js__clue');
const triedElement=document.querySelector('.js__tried');

//función para el número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   };
 
   const randomNumber=getRandomNumber(100);

   console.log(randomNumber);

//función para pistas

function showClue() {
    const number=parseInt(inputElement.value);
        if (number===randomNumber) {
            clueElement.innerHTML = '¡Has acertado! ¡Enhorabuena! ;)';
        }else if (number > 100) {
            clueElement.innerHTML = 'Tienes que elegir un número entre 1 y 100';
        }else if (number > randomNumber){
            clueElement.innerHTML = '¡Prueba con un número más bajo! XD';
        }else if (number < randomNumber) {
            clueElement.innerHTML = '¡Prueba con un número más alto! XD';
        }
};
buttonElement.addEventListener('click' , showClue);

//función para intentos

