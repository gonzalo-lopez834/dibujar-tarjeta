window.onload = function() {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const palo  = ['♠', '♣', '♥', '♦'];
    
    // Selecciona valor y palo al azar
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomPalo = palo[Math.floor(Math.random() * palo.length)];
    
    // Pone el color según el palo 
    const color = (randomPalo === '♥' || randomPalo === '♦') ? 'red' : 'black';
    
    // Asigna el valor de la carta al elemento HTML
    const numberElement = document.querySelector('.number');
    numberElement.innerHTML = randomValue;
    numberElement.style.color = color;
    
    // Asigna el palo y el color a los contenedores superior e inferior
    const topSuit = document.querySelector('.top-carta');
    const bottomSuit = document.querySelector('.bottom-carta');
    
    topSuit.innerHTML = randomPalo;
    topSuit.style.color = color;
    
    bottomSuit.innerHTML = randomPalo;
    bottomSuit.style.color = color;
};
