console.log('from quote app...');
const quotes = {
    'Michel Audiard': "La verite n'est jamais amusante sinon tout le monde la dirait",
    'Confucius' : "Choisissez un travail que vous aimez et vous n'aurez pas a travailler un seul jour de votre vie",
    'Aristote' : "L'ignorant l'affirme, le savant doute et le sage reflechit", 
    'Oscar Wilde' : "Le seul moyen de se delivrer d'une tentation, c'est d'y ceder.", 
    'Antoine de St. Exupery' : "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la meme direction.",
}

const nextQuoteBtn = document.querySelector('#next-quote-btn')
const quoteAuthor = document.querySelector('#quote-author')
const quoteText = document.querySelector('#quote-text')

const authors = Object.keys(quotes)


nextQuoteBtn.addEventListener('click', () => {
    let rdIdx = Math.floor(Math.random()* authors.length)
    quoteText.textContent = quotes[authors[rdIdx]]
    quoteAuthor.textContent = authors[rdIdx]
})