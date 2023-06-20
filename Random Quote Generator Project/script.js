const generateBtn = document.querySelector('.generate-button')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author .name')

generateQuote()

generateBtn.addEventListener('click', generateQuote)

function generateQuote() {
  fetch('https://api.quotable.io/random').then(res => res.json())
    .then(result => {
      quote.innerText = `"${result.content}"`
      author.innerText = `- ${result.author}`
  })
}