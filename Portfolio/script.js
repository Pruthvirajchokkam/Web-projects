const burgerMenu = document.getElementById('toggle');
const registerBtn = document.getElementById('register');
const closeRegisterBtn = document.getElementById('close');
const overlay = document.getElementById('main-container');

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('display');
});
registerBtn.addEventListener('click', () => {
  overlay.classList.add('show-modal');
});
closeRegisterBtn.addEventListener('click', () => {
  overlay.classList.remove('show-modal');
});
window.addEventListener('click', e => {
  console.log(e.target);
  e.target == overlay ? overlay.classList.remove('show-modal') : false;
});
