const ele2017 = document.getElementById('content-2017');
const ele2018 = document.getElementById('content-2018');
const ele2019 = document.getElementById('content-2019');

document.getElementById('video').controls = true;
document.getElementById('video-1').controls = true;
document.getElementById('video-2').controls = true;
document.getElementById('video-3').controls = true;
document.getElementById('video-4').controls = true;

function loopGokarna() {
  for (let i = 1; i <= 8; i++) {
    const ele = document.createElement('img');
    ele.classList.add('gokarna');
    ele.src = `resources/2017/gokarna${i}.jpg`;
    ele2017.appendChild(ele);


    
    if(i===7){
    const ele1 = document.createElement('div');
    ele1.classList.add('div-container');
    ele1.innerHTML = "Fashionable Lady 🤪";
    ele2017.appendChild(ele1);
    }

  }
}

function loopChick() {
  for (let i = 1; i <= 4; i++) {
    const ele = document.createElement('img');
    ele.classList.add('chick');
    ele.src = `resources/2018/chick${i}copy.jpg`;
    ele.controls = true;
    ele2018.appendChild(ele);
    console.log(ele);
  
  }

  for (let i = 1; i <= 1; i++) {
    const ele = document.createElement('img');
    ele.classList.add('chick');
    ele.classList.add('gif1');
    ele.src = `resources/2018/chick${i}.gif`;
    ele.controls = true;
    ele2018.appendChild(ele);
    console.log(ele);
  }

  // for (let i = 1; i <= 4; i++) {
  //   const ele = document.createElement('video');
  //   ele.classList.add('chick');
  //   ele.classList.add('video');
  //   ele.src = `resources/2018/chick${i}.mp4`;
  //   ele2018.appendChild(ele);
  //   console.log('-----------video----------');
  //   console.log(ele);
  // }
}

function loopMysore() {
  for (let i = 1; i <= 12; i++) {
    const ele = document.createElement('img');
    ele.classList.add('mysore');
    ele.src = `resources/2019/mysore${i}.jpg`;
    ele2019.appendChild(ele);
    console.log(ele);
  }
}

loopGokarna();
loopChick();
loopMysore();



var palette = ['#eb4d4b', '#badc58', '#f9ca24', '#22a6b3']

function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateColor() {
  let index = random(0, palette.length - 1)
  return palette[index]
}

function cleanUp(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

function partyTime() {
  // remove exisiting elements before creaitng new ones
 const container = document.querySelector('.living-room')
  cleanUp(container)

  let numberOfBalloons = (window.innerWidth / 80) * 3

  for (var i = 0; i < numberOfBalloons; i++) {
   
    const template = document.querySelector('template').content.cloneNode(true)

    let thisColor = generateColor()
    let transform = {
      rotate: Math.floor(random(-15, 15) * 1.25) + 'deg',
      translateX: random(-window.innerWidth / 2, window.innerWidth / 2) + 'px',
      translateY: random(-100, 100) + 'px',
    }

    template.querySelector('.helium').style.transform = Object.keys(transform)
      .map(prop => `${prop}(${transform[prop]})`).join(' ')
    template.querySelector('.balloon').style.background = thisColor
    template.querySelector('.knot').style.borderBottomColor = thisColor

    container.appendChild(document.importNode(template, true))
  }

  document.querySelectorAll('.helium').forEach(e => e.addEventListener('click', function(ev) {
    Object.assign(ev.target.style, {
      width: `.${random(50, 75)}rem`,
      height: '3px',
      transform: `translateY(${window.innerHeight
          * 0.9}px) skew(20deg,0deg) rotate(${random(0, 100)}deg)`,
      transition: 'transform 1s ease-out',
    })
    ev.target.classList.add('popped')

    ev.target.querySelector('.string').style.opacity = 0
    ev.target.querySelector('.knot').style.borderBottomWidth = '3px'
    ev.target.querySelector('.knot').style.animationPlayState = 'paused'
  }))
}

setInterval(partyTime, 7000);


document.querySelector('.refresh').addEventListener('click', partyTime)

partyTime(document.querySelector('.living-room'))