const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

function showErrorMessage(element, Message) {
  formElement = element.parentElement;
  formElement.className = 'form-control error';
  const small = formElement.querySelector('small');
  small.innerText = Message;
}

function showSuccessMessage(element) {
  formElement = element.parentElement;
  formElement.className = 'form-control success';
}

// function isValidEmail(emailInput) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(emailInput).toLowerCase());
// }

function hi() {
  console.log('hi');
}

function showMessage(elementArray) {
  elementArray.forEach(item => {
    item.value === ''
      ? showErrorMessage(item, `${item.id} is required`)
      : showSuccessMessage(item);
  });
}
const btn = document.getElementById('btn');
btn.addEventListener('submit', function(e) {
  e.preventDefault();
  showMessage([name, email, password, password1]);
});
