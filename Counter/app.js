const value = document.getElementById('value');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

let count = 0;

increaseBtn.addEventListener('click', () => {
    count++;
    value.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    value.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    value.textContent = count;
});