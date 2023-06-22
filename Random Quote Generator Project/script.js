const generateBtn = document.querySelector('.generate-button')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author .name')
const soundBtn = document.querySelector('.sound')
const copyBtn = document.querySelector('.copy')
const twitterBtn = document.querySelector('.twitter')

generateQuote()

generateBtn.addEventListener('click', generateQuote)

function generateQuote() {  
  generateBtn.classList.add('loading')
  generateBtn.innerText = 'Loading...'
  fetch('https://api.quotable.io/random').then(res => res.json())
    .then(result => {
      quote.innerText = `${result.content}`
      author.innerText = `${result.author}`
      generateBtn.innerText = 'Generate'
      generateBtn.classList.remove('loading')
  })
}

// Speech Synthesis Utterance API - Speech Request
soundBtn.addEventListener('click', () => {
  let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`)
  speechSynthesis.speak(utterance)
})

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(`${quote.innerText} by ${author.innerText}`)
})

twitterBtn.addEventListener('click', () => {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} \n - ${author.innerText}`)
})