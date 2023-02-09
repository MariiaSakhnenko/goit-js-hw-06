let counterValue = 0;
const valueRef = document.getElementById('value');
const decrementButton = document.querySelector('[data-action = "decrement"]');
const incrementButton = document.querySelector('[data-action = "increment"]');

const clickDecrementButton = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const clickIncrementButton = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

decrementButton.addEventListener('click', clickDecrementButton);
incrementButton.addEventListener('click', clickIncrementButton);
