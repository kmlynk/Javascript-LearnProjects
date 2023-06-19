const nameElement = document.querySelector('.js-name')
const dateElement = document.querySelector('.js-date')
const amountElement = document.querySelector('.js-amount')
const submitButton = document.querySelector('.js-submitButton')
const expenseScreen = document.querySelector('.js-expenseScreen')
const totalScreen = document.querySelector('.js-totalScreen')

const expenseList = JSON.parse(localStorage.getItem('list')) || [{
  name: 'Computer',
  date: '2023-06-19',
  amount: 1800
}]

showList()
calcTotal()

submitButton.addEventListener('click', addExp)

function showList() {
  let listHTML = ''

  for (let i = 0; i < expenseList.length; i++) {
    const expense = expenseList[i]

    const { name, date, amount } = expense

    const html = `
      <div> ${i+1}. ${name} </div>

      <div>${date}</div>

      <div>${amount} €</div>

      <button class="js-deleteButton deleteButton" onclick="
        expenseList.splice(${i}, 1)
        if (expenseList.length == 0) {
          localStorage.removeItem('list')
        }
        else 
        save(expenseList)
        showList()
        calcTotal()
      ">Delete</button>
    `

    listHTML += html
  }

  expenseScreen.innerHTML = listHTML
}

function addExp() {
  const name = nameElement.value
  const date = dateElement.value
  const amount = amountElement.value

  expenseList.push({
    name,
    date,
    amount
  })

  nameElement.value = ''
  dateElement.value = ''
  amountElement.value = ''

  save(expenseList)
  showList()
  calcTotal()
}

function calcTotal() {
  let total = 0

  for (let i = 0; i < expenseList.length; i++) {
    totalElem = Number(expenseList[i].amount)

    total += totalElem
  }

  const totalHTML = `
    <div>Total</div>

    <div>${total} €</div>
  `

  totalScreen.innerHTML = totalHTML
}

function save(elem) {
  localStorage.setItem('list', JSON.stringify(elem))
}

