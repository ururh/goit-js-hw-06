const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
  
let total = 0;

decrementButton.addEventListener('click', decrementCounter);
incrementButton.addEventListener('click', incrementCounter);

function decrementCounter() {
    total--;
    num();
}

function incrementCounter() {
    total++;
    num();
}
  
function num() {
    value.textContent = total;
}