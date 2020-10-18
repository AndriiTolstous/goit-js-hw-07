

const actionMinus = document.querySelector('[data-action="decrement"]');
const actionPlus = document.querySelector('[data-action="increment"]');

let startValue = document.querySelector('#value');
let counterValue = Number (startValue.textContent);

const addListenerBtnMinus = actionMinus.addEventListener ('click', () => {
    counterValue -= 1;
    startValue.textContent = counterValue;
});
const addListenerBtnPlus = actionPlus.addEventListener ('click', () => {
    counterValue += 1;
    startValue.textContent = counterValue;
});