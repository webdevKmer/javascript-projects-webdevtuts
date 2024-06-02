console.log('in the counter app...');
const counter = document.querySelector('.counter')
const increaseBtn = document.querySelector('#increase-btn')
const decreaseBtn = document.querySelector('#decrease-btn')

console.log(counter, increaseBtn, decreaseBtn);

increaseBtn.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) + 1;
  console.log('increase');
})

decreaseBtn.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) - 1;
  console.log('increase');
})