handleLogoClick = () => {
  const url = "https://animechan.vercel.app/api/random";

  display = (quote) => {
    alert(`${quote.quote} - ${quote.character}`);
  }

  fetch(url)
    .then((response) => response.json())
    .then((quote) => display(quote))
}

document.querySelector('form').addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input')
  if (input.value != '') {
    addTodo(input.value);
  } else {
    alert("Please write something first!");
  }
  input.value = '';
}
