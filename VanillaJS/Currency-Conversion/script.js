const country1 = document.getElementById('from-loc');
const price1 = document.getElementById('from-price');
const country2 = document.getElementById('to-loc');
const price2 = document.getElementById('to-price');
const conversionText = document.getElementById('conversion');
const swapBtn = document.getElementById('swap');

function calculate() {
  const con1 = country1.value;
  const con2 = country2.value;
  console.log(con1);
  //fetch(`https://api.exchangeratesapi.io/latest?base=${con1}`)
  fetch(`https://api.exchangerate-api.com/v4/latest/${con1}`)
    .then(response => response.json())
    .then(eve => {
      console.log(eve.rates[con2]);
      const rate2 = eve.rates[con2];
      console.log(rate2);

      conversionText.innerHTML = ` 1 ${country1.value} = ${rate2.toFixed(2)} ${country2.value}`;

      price2.value = (rate2 * price1.value).toFixed(2);
    });
}

function swap() {
  console.log('swap');
  const temp = country1.value;
  country1.value = country2.value;
  country2.value = temp;

  calculate();
}

country1.addEventListener('change', calculate);
price1.addEventListener('input', calculate);
country2.addEventListener('change', calculate);
price2.addEventListener('input', calculate);

swapBtn.addEventListener('click', swap);

calculate();
