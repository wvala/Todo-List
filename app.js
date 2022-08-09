let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

handleLogoClick = () => {
  const url = "https://animechan.vercel.app/api/random";

  display = (quote) => {
    alert(`"${quote.quote}" - ${quote.character}`);
  }

  fetch(url)
    .then((response) => response.json())
    .then((quote) => display(quote))
}

document.querySelector('form').addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (input.value != '') {
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addTodo(input.value);
  } else {
    alert("Please write a task first!");
  }

  input.value = '';
}

data.forEach((item) => {
  addTodo(item)
})

function addTodo(todo) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `
      <span class="todo-item">${todo}</span>
      <button name="checkButton"><i class="fa-solid fa-check"></i></button>
      <button name="deleteButton"><i class="fa-solid fa-trash"></i></button>
  `;
  li.classList.add('todo-list-item');
  ul.appendChild(li);
}

document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

function handleClickDeleteOrCheck(e) {
  if (e.target.name == 'checkButton') {
    checkTodo(e);
  } else if (e.target.name == 'deleteButton') {
    deleteTodo(e);
  }
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == 'line-through') {
    item.style.textDecoration = 'none';
  } else {
    item.style.textDecoration = 'line-through';
  }
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
}

document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleClearAll(e) {
  document.querySelector('ul').innerHTML = '';
  localStorage.clear()
}
