console.log("from js file!!");
btn = document.querySelector('#color')
bodyElt = document.querySelector('#body')
console.log(btn, bodyElt);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


btn.addEventListener('click', () => {
  const color_idx = Math.floor(Math.random() * colors.length)
  console.log('got clicked!', color_idx);
  bodyElt.style = `background-color: ${colors[color_idx]}`
})