const add_user = document.getElementById('add_user');
const double = document.getElementById('double_money');
const show_only = document.getElementById('show_only_millionaires');
const sort = document.getElementById('sort_by_richest');
const calculate = document.getElementById('calculate_entire_wealth');
const main = document.getElementById('main-container');
const detail = document.getElementById('detail-container');

let data = [];

fetchData();
fetchData();
fetchData();

async function fetchData() {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();
  const user = data.results[0];
  const newUser = {};
  newUser.name = `${user.name.first} ${user.name.last}`;
  newUser.wealth = Math.floor(Math.random() * 1000000);
  addData(newUser);
  displayUserData();
}

function addData(user) {
  data.push(user);
}

function displayUserData(userData = data) {
  detail.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  userData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${convertToMoney(
      item.wealth
    )}`;
    detail.appendChild(element);
  });
}

function convertToMoney(x) {
  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

function doubleWealth() {
  console.log('doubleWealth');
  // data.forEach(item => {
  //   const doublePrice = item.wealth * 2;
  //   item.wealth = doublePrice;
  // });
  data = data.map(item => {
    return { ...item, wealth: item.wealth * 2 };
  });
  displayUserData();
}

function sortByWealth() {
  data.sort((person1, person2) => person2.wealth - person1.wealth);
  displayUserData();
}

function filterMillionaires() {
  data = data.filter(item => item.wealth > 1000000);
  displayUserData();
}

function cumulative() {
  const total = data.reduce((acc, item) => acc + item.wealth, 0);
  console.log(typeof total);

  const element = document.createElement('div');
  element.classList.add('total');
  element.innerHTML = `<strong>Total</strong> ${convertToMoney(total)}`;
  displayUserData();
  detail.appendChild(element);

  // const totalObj = {};
  // totalObj.name = 'Total';
  // totalObj.wealth = total;
  // data.push(totalObj);
  // displayUserData();
  // data.pop(totalObj);
}
add_user.addEventListener('click', fetchData);
double.addEventListener('click', doubleWealth);
sort.addEventListener('click', sortByWealth);
show_only.addEventListener('click', filterMillionaires);
calculate.addEventListener('click', cumulative);
