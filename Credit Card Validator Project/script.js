const firstName = document.querySelector('.input-first-name')
const lastName = document.querySelector('.input-last-name')
const cardNumber = document.querySelector('.input-card')
const expDate = document.querySelector('.input-date')
const cvv = document.querySelector('.input-cvv')
const validateBtn = document.querySelector('.validate-btn')

const firstNameOnCard = document.querySelector('.card-first-name')
const lastNameOnCard = document.querySelector('.card-last-name')
const numberOnCard = document.querySelector('.card-card-number')
const dateOnCard = document.querySelector('.card-date')
const cvvOnCard = document.querySelector('.card-cvv')

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

firstName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    firstNameOnCard.innerHTML = "MAX MUSTERMANN"
  }
  else {
    firstNameOnCard.innerHTML = e.target.value.toUpperCase()
  }
})

lastName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    lastNameOnCard.innerHTML = "MAX MUSTERMANN"
  }
  else {
    lastNameOnCard.innerHTML = e.target.value.toUpperCase()
  }
})

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

cvv.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cvvOnCard.innerHTML = "###"
  }
  else {
    cvvOnCard.innerHTML = e.target.value
  }
})

validateBtn.addEventListener("click", () => {
  console.log(validate())
})