console.log("from js file!!");
btn = document.querySelector('#color-btn')
bodyElt = document.querySelector('#body')
hexnumber = document.querySelector('#hex-number')
console.log(btn, bodyElt, hexnumber);

const generateHexNumber = () => {
  const hexvalues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
  let generatedHex = ''
  for (let index = 0; index < 6; index++) {
    const elt_idx = Math.floor(Math.random() * hexvalues.length);
    generatedHex += hexvalues[elt_idx]

  }
  hexnumber.textContent = generatedHex
  bodyElt.style.backgroundColor = `#${generatedHex}`
}

btn.addEventListener('click', () => {
  generateHexNumber()
})