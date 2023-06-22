const buttonElement = document.querySelector('.js-submitButton')
const inputElement = document.querySelector('.js-input')

const vowels = 'AaEeIiOoUu'

buttonElement.addEventListener('click', () => {
  let count = 0
  word = inputElement.value 

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] == vowels[j]) {
        count++
      }
    }
  }
  inputElement.value = ''
  alert(`Vowel Count: ${count}`)
})

inputElement.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    let count = 0
    word = inputElement.value 

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (word[i] == vowels[j]) {
          count++
        }
      } 
    }
    inputElement.value = ''
    alert(`Vowel Count: ${count}`)
    }
}) 