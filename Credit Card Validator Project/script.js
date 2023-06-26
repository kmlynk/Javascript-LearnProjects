/**
 * Credit Card Validator Project
 */
const firstName = document.querySelector('.input-first-name')
const lastName = document.querySelector('.input-last-name')
const cardNumber = document.querySelector('.input-card')
const expDate = document.querySelector('.input-date')
const cvv = document.querySelector('.input-cvv')
const validateBtn = document.querySelector('.validate-btn')
const resetBtn = document.querySelector('.reset-btn')

const firstNameOnCard = document.querySelector('.card-first-name')
const lastNameOnCard = document.querySelector('.card-last-name')
const numberOnCard = document.querySelector('.card-card-number')
const dateOnCard = document.querySelector('.card-date')
const cvvOnCard = document.querySelector('.card-cvv')

/**
 * Updates the card number on the credit card when the input changes
 */
cardNumber.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    numberOnCard.innerHTML = "#### #### #### ####"
  }

  else {
    const input = e.target.value.replaceAll(" ", "")

    if (e.target.value.length > 14) {
      e.target.value = input.replace(/(\d{4})/g, '$1 ').trim()
      numberOnCard.innerHTML = e.target.value
    }
    else if (e.target.value.length > 8) {
      e.target.value = input.replace(/(\d{4})/g, '$1 ').trim()
      numberOnCard.innerHTML = e.target.value
    }
    else if (e.target.value.length > 4) {
      e.target.value = input.replace(/(\d{4})/g, '$1 ').trim()
      numberOnCard.innerHTML = e.target.value
    }
    else {
      numberOnCard.innerHTML = input
    }
  }
})

/**
 * Updates the first name on the credit card when the input changes
 */
firstName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    firstNameOnCard.innerHTML = "MAX"
  }
  else {
    firstNameOnCard.innerHTML = e.target.value.toUpperCase()
  }
})

/**
 * Updates the last name on the credit card when the input changes
 */
lastName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    lastNameOnCard.innerHTML = "MUSTERMANN"
  }
  else {
    lastNameOnCard.innerHTML = e.target.value.toUpperCase()
  }
})

/**
 * Updates the expiration date on the credit card when the input changes
 */
expDate.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    dateOnCard.innerHTML = "MM/YY"
  }
  else {
    const input = e.target.value.replaceAll("/", "")

    if (e.target.value.length > 2) {
      e.target.value = input.replace(/(\d{2})(\d{0,2})/, '$1/$2')
      dateOnCard.innerHTML = e.target.value
    }
    else {
      dateOnCard.innerHTML = input
    }
  }
})

/**
 * Updates the CVV on the credit card when the input changes
 */
cvv.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cvvOnCard.innerHTML = "###"
  }
  else {
    cvvOnCard.innerHTML = e.target.value
  }
})

/**
 * Resets the credit card when the button is clicked
 */
resetBtn.addEventListener("click", () => {
  console.log('Reset')
  firstName.value = ""
  lastName.value = ""
  cardNumber.value = ""
  expDate.value = ""
  cvv.value = ""

  firstNameOnCard.innerHTML = "MAX"
  lastNameOnCard.innerHTML = "MUSTERMANN"
  numberOnCard.innerHTML = "#### #### #### ####"
  dateOnCard.innerHTML = "MM/YY"
  cvvOnCard.innerHTML = "###"
})

/**
 * Validates the credit card when the button is clicked
 */
validateBtn.addEventListener("click", () => {
  console.log('Validate')
  validate()
})

/**
 * Validates the credit card
 */
function validate() {
  if (checkFull()) {
    if (valAlgo()) {
      alert('Your credit card is valid!')
    }
    else {
      alert('Your credit card is invalid!')
    }
  }
}

/**
 * Checks if all fields are filled
 * @returns true if all fields are filled
 */
function checkFull() {
  if (!firstName.value) {
    return alert('Please enter your first name')
  }
  else if (!lastName.value) {
    return alert('Please enter your last name')
  }
  else if (cardNumber.value.length < 19) {
    return alert('Please enter your card number')
  }
  else if (expDate.value.length < 5) {
    return alert('Please enter your expiration date')
  }
  else if (cvv.value.length < 3) {
    return alert('Please enter your CVV')
  }
  else return true
}

/**
 * Luhn Algorithm
 * @returns true if the card number is valid
 */
function valAlgo() {
  num = cardNumber.value.replaceAll(" ", "")
  const numArr = Array.from(num.toString()).map(Number)
  const addArr = []

  for (let i = 0; i < numArr.length; i += 2) {
    temp = numArr[i] *= 2

    if (temp > 9) {
      numArr[i] = 0
      temArr = Array.from(temp.toString()).map(Number)
      addArr.push(temArr[0])
      addArr.push(temArr[1])
    }
    else {
      numArr [i] = temp
    }
  }

  for (let i = 0; i < addArr.length; i++) {
    numArr.push(addArr[i])
  }

  let sum = 0
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i]
  }

  return (sum % 10 == 0)
}