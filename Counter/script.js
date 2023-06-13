const countElement = document.querySelector('.js-count')

const plusElement = document.querySelector('.js-plusButton')
const resetElement = document.querySelector('.js-resetButton')
const minusElement = document.querySelector('.js-minusButton')

let count = 0

plusElement.addEventListener('click', plus)
minusElement.addEventListener('click', minus)
resetElement.addEventListener('click', reset)

function plus() {
  count++
  displayCount()
}

function minus() {
  count--
  displayCount()
}

function reset() {
  count = 0
  displayCount()
}

function displayCount() {
  countElement.innerHTML = `${count}`
}