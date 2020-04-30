const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function display() {
  var today = new Date();
  var bday = new Date('05/05/2020 00:00:00');
  // console.log(today);
  var diff = bday.getTime() - today.getTime();

  var msec = diff;
  console.log(msec);

  var dd = Math.floor(msec / 1000 / 60 / 60 / 24);
  msec -= dd * 1000 * 60 * 60 * 24;
  console.log(msec);

  var hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  var ss = Math.floor(msec / 1000);
  msec -= ss * 1000;
  var ms = Math.floor(ss / 1);

  console.log(dd + ':' + hh + ':' + mm + ':' + ss);

  days.innerText = dd;
  hours.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;
}

// while (true) {
//   display();
//   sleep(4000);
// }

setInterval(display, 1000);

// display();
