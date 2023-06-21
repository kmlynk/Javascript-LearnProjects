const clearBtn = document.querySelector(".clear")
const plusMinusBtn = document.querySelector(".plus-minus")
const percentBtn = document.querySelector(".percent")
const divideBtn = document.querySelector(".divide")
const multiplyBtn = document.querySelector(".multiply")
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const equalBtn = document.querySelector(".equal")
const commaBtn = document.querySelector(".comma")

const nineBtn = document.querySelector(".nine")
const eightBtn = document.querySelector(".eight")
const sevenBtn = document.querySelector(".seven")
const sixBtn = document.querySelector(".six")
const fiveBtn = document.querySelector(".five")
const fourBtn = document.querySelector(".four")
const threeBtn = document.querySelector(".three")
const twoBtn = document.querySelector(".two")
const oneBtn = document.querySelector(".one")
const zeroBtn = document.querySelector(".zero")

const calculationScreen = document.querySelector(".calculation")

clearBtn.addEventListener("click", () => {
  calculationScreen.innerHTML = '0'
});

percentBtn.addEventListener("click", percent)

plusMinusBtn.addEventListener("click", plusMinus)

function addNumberToScreen(number) {
  if (number != 0) {
    if (calculationScreen.innerHTML == '0') {
      calculationScreen.innerHTML = number
    } else {
      calculationScreen.innerHTML += number
    }
  }
  else {
    if (calculationScreen.innerHTML != '0') {
      calculationScreen.innerHTML += number
    }
  }
}

function addOperatorToScreen(operator) {
  calculationScreen.innerHTML += operator
}

function calculate() {
  calculationScreen.innerHTML = eval(calculationScreen.innerHTML)
}

function percent() {
  calculationScreen.innerHTML = eval(calculationScreen.innerHTML) / 100
}

function plusMinus() {
  if (calculationScreen.innerHTML != '0') {
    calculationScreen.innerHTML = eval(calculationScreen.innerHTML) * -1
  }
}