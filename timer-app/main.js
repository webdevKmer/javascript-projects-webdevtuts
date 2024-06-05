console.log('in the message app...');
const inputMessage = document.querySelector('#message')
const submitBtn = document.querySelector('#submit-btn')
const messageList = document.querySelector('.message-list')

console.log(inputMessage, submitBtn, messageList);

submitBtn.addEventListener('click', () => {
  console.log('click');
  const message = inputMessage.value
  messageList.innerHTML += `<div class="message">${message}</div>`
  inputMessage.value = ""
})