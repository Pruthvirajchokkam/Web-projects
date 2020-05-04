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
    ele1.innerHTML = "Fashionable Lady";
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
