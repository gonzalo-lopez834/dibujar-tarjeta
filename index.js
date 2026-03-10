

window.onload = function() {

    // Array de numeros y palos
    const numero = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const palo  = ['♠', '♣', '♥', '♦'];
    
    // Seleccion aleatoria de numero y palo
    const randomNumero = numero[Math.floor(Math.random() * numero.length)];
    const randomPalo = palo[Math.floor(Math.random() * palo.length)];

    // Asignacion de color segun el palo
    const color = (randomPalo === '♥' || randomPalo === '♦') ? 'red' : 'black';

    // Seleccionamos los elementos del DOM
    const numeroElement = document.querySelector(".number")
    const paloElementTop = document.querySelector(".top")
    const paloElementBottom = document.querySelector(".bottom")
    const cartaElement = document.querySelector(".card")

    // Asignamos el valor y el color 
    numeroElement.textContent = randomNumero;
    paloElementTop.textContent = randomPalo;
    paloElementBottom.textContent = randomPalo;
    cartaElement.style.color = color;

};
