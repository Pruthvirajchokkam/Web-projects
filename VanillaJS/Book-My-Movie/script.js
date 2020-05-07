const movieContainer = document.querySelector('.movie-container');
const movieSelect = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const ticketCount = document.getElementById('count');
const totalFare = document.getElementById('fare');
let moviePrice = +movieSelect.value;

displayUI();

function saveMovieData(price, index) {
  localStorage.setItem('selectedMoviePrice', price);
  localStorage.setItem('selectedMovieIndex', index);
}
function updateCountAndFare() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  ticketCount.innerText = selectedSeats.length;
  totalFare.innerText = selectedSeats.length * moviePrice;

  const selectedSeatArr = [...selectedSeats].map(thing => {
    return [...seats].indexOf(thing);
  });

  localStorage.setItem('selectedSeatIndex', JSON.stringify(selectedSeatArr));
}

function displayUI() {
  if (localStorage.getItem('selectedSeatIndex') != null || localStorage.getItem('selectedMovieIndex')!=null) {
    const movieIndex = localStorage.getItem('selectedMovieIndex');
    movieSelect.selectedIndex = movieIndex;

    const savedMoviePrice = localStorage.getItem('selectedMoviePrice');
    moviePrice = savedMoviePrice;

    const selectedIndex = JSON.parse(localStorage.getItem('selectedSeatIndex'));
    console.log(selectedIndex);
    seats.forEach((thing, index) => {
      if (selectedIndex.indexOf(index) > -1) {
        thing.classList.add('selected');
      }
    });
  }
}

movieContainer.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }
  updateCountAndFare();
});

movieSelect.addEventListener('change', e => {
  moviePrice = e.target.value;
  updateCountAndFare();
  saveMovieData(e.target.value, e.target.selectedIndex);
});

updateCountAndFare();
