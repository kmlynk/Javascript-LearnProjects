//TODO: Add TickBox
//TODO: Implement localStorage

const inputElement = document.querySelector('.js-todoInput')
const dateElement = document.querySelector('.js-dateInput')
const screenElement = document.querySelector('.js-todoScreen')
const addButtonElement = document.querySelector('.js-addButton')
const deleteButtonElement = document.querySelector('.js-deleteButton')

const todoList = [{
  name: 'Make Dinner',
  date: '06-14-2023'
}]

showTodoList()

addButtonElement.addEventListener('click', addToDo)

function showTodoList() {
  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]

    const {name, date} = todoObject

    const html = `
      <div>${i+1}. ${name}</div>
      <div>Until ${date}</div>
      <button class="js-deleteButton deleteButton" onclick="
        todoList.splice(${i}, 1)
        showTodoList()
      "> Delete </button>
    `

    todoListHTML += html
  }

  screenElement.innerHTML = todoListHTML
}

function addToDo() {
  const name = inputElement.value 
  const date = dateElement.value 

  todoList.push({
    name,
    date
  })

  inputElement.value = ''

  showTodoList()
}