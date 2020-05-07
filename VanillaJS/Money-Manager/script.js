const submitBtn = document.getElementById('submit');
const totalLabel = document.getElementById('total');
const incomeLabel = document.getElementById('income-label');
const expenseLabel = document.getElementById('expense-label');
const transactionItem = document.getElementById('text');
const transactionAmount = document.getElementById('amount');
const historyContent = document.getElementById('history-content');
let closeBtn = '';
let transactionData = [];

function removeHistoryItem(data) {
  console.log(data);
  transactionData = transactionData.filter(item => item.desc !== data);
  console.log(transactionData);
  historyContent.innerHTML = '';


  console.log("transactionData"+transactionData);
 addAmountToHistoryAndBalance();
}

function updateLabels() {
  let positive = 0;
  let negative = 0;
  transactionData.forEach(item => {
    if (item.amount.slice(0, 1) === '-') {
      negative = +item.amount.slice(1) + negative;
    } else if (item.amount.slice(0, 1) === '+') {
      positive = positive + +item.amount.slice(1);
    } else {
      positive = positive + +item.amount;
    }
  });

  expenseLabel.innerText = `₹${negative}`;
  incomeLabel.innerText = `₹${positive}`;
  totalLabel.innerText = `₹${positive - negative}`;
}

function addAmountToHistoryAndBalance() {

  transactionData.forEach(item => {

    //update history with new element
    const pElement = document.createElement('div');
    if (item.amount.slice(0, 1) === '-') {
      pElement.classList.add('expenses');
    } else {
      pElement.classList.add('incomes');
    }
    pElement.classList.add('item');
    pElement.innerHTML = `<button class="close" id="close" onclick="removeHistoryItem('${item.desc}')">
                          x</button><span>${item.desc}
    </span><span>${item.amount}</span>`;
    historyContent.append(pElement);

    // closeBtn = document.getElementById('close');
  });

  updateLabels();
}

function updateTransactionData() {
  historyContent.innerHTML = '';
  if (transactionItem.value && transactionAmount.value) {
    const newData = {};
    newData.desc = transactionItem.value;
    newData.amount = transactionAmount.value;
    transactionData.push(newData);
    addAmountToHistoryAndBalance();
    transactionItem.value = '';
    transactionAmount.value = '';
  } else {
    alert('please enter the transaction and amount');
  }
}
submitBtn.addEventListener('click', updateTransactionData);

// console.log(historyContent.childElementCount);

// if(historyContent.childElementCount>0)
// if (closeBtn) {
//   closeBtn.addEventListener('click', removeHistoryItem);
// }
