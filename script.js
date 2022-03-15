let lastRenderTime = 0;
let DIG_SPEED = 1;

//Make a 5x5 grid of boxes that will house each diglett, dirt mound
function makeGrid() {
  for (var i = 0; i < 5; i++) {
    var row = document.createElement('div');
    row.className = "row";
    for (var j = 0; j < 5; j++) {
      var dirt = document.createElement('div');
      dirt.className = "dirt";
      row.appendChild(dirt);
    }
    document.querySelector('.grid').appendChild(row);
  }
}
makeGrid();

let holes = document.querySelectorAll('.dirt');
let amtHoles = holes.length;
//console.log(holes);
//console.log(amtHoles);

//generate a random amount of time between minimum seconds and maximum seconds.
// function setRandomTime(minTime, maxTime) {
//   let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
//   console.log(time);
//   return time;
// }

//combine random timer and toggle class to change dirt into digletts
function setDiglett() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    // var diggity = document.querySelector('.dirt');
    // diggity.classList.toggle('diglett')

    holes.forEach((e) => {
      e.classList.remove('diglett');
    })
    holes[randomSpot].classList.toggle("diglett");

    //console.log(randomSpot);
  }
  // let digUnder = function () {
  //   holes[randomSpot].classList.add('dirt');
  // }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(1000, 2000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setDugtrio() {
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    var diggity = document.querySelector('.dirt');
    diggity.classList.toggle('dugtrio')

    holes.forEach((e) => {
      e.classList.remove('dugtrio');
    })

    //let randomSpot = (Math.floor(Math.random() * amtHoles));
    holes[(Math.floor(Math.random() * amtHoles))].classList.toggle("dugtrio");

    //console.log(randomSpot);
  }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(1000, 1000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setShinyDiglett() {
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    var diggity = document.querySelector('.dirt');
    diggity.classList.toggle('shinyDiglett')

    holes.forEach((e) => {
      e.classList.remove('shinyDiglett');
    })

    //let randomSpot = (Math.floor(Math.random() * amtHoles));
    holes[(Math.floor(Math.random() * amtHoles))].classList.toggle("shinyDiglett");

    //console.log(randomSpot);
  }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(500, 1000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setShinyDugtrio() {
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    var diggity = document.querySelector('.dirt');
    diggity.classList.toggle('shinyDugtrio')

    holes.forEach((e) => {
      e.classList.remove('shinyDugtrio');
    })

    //let randomSpot = (Math.floor(Math.random() * amtHoles));
    holes[(Math.floor(Math.random() * amtHoles))].classList.toggle("shinyDugtrio");

    //console.log(randomSpot);
  }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(1000, 1000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanDiglett() {
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    var diggity = document.querySelector('.dirt');
    diggity.classList.toggle('alolanDiglett')

    holes.forEach((e) => {
      e.classList.remove('alolanDiglett');
    })

    //let randomSpot = (Math.floor(Math.random() * amtHoles));
    holes[(Math.floor(Math.random() * amtHoles))].classList.toggle("alolanDiglett");

    //console.log(randomSpot);
  }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(500, 1000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanShinyDiglett() {
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    var diggity = document.querySelector('.dirt');
    diggity.classList.toggle('alolanShinyDiglett')

    holes.forEach((e) => {
      e.classList.remove('alolanShinyDiglett');
    })

    //let randomSpot = (Math.floor(Math.random() * amtHoles));
    holes[(Math.floor(Math.random() * amtHoles))].classList.toggle("alolanShinyDiglett");

    //console.log(randomSpot);
  }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(500, 1000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanShinyDugtrio() {
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  let dig = function () {
    var diggity = document.querySelector('.dirt');
    diggity.classList.toggle('alolanShinyDugtrio')

    holes.forEach((e) => {
      e.classList.remove('alolanShinyDugtrio');
    })

    //let randomSpot = (Math.floor(Math.random() * amtHoles));
    holes[(Math.floor(Math.random() * amtHoles))].classList.toggle("alolanShinyDugtrio");

    //console.log(randomSpot);
  }
  //setTimeout(setRandomTime(500, 1000), 1000);
  setTimeout(dig, setRandomTime(500, 500));
}


setInterval(setDiglett, 2000);
//setInterval(setDugtrio, 3000);
//setInterval(setShinyDiglett, 5000);
//setInterval(setShinyDugtrio, 10000);
//setInterval(setAlolanDiglett, 6000);
//setInterval(setAlolanShinyDiglett, 7000);
//setInterval(setAlolanShinyDugtrio, 10000);

//function for controlling the random speed of the diglett
// function main(currentTime) {
//   window.requestAnimationFrame(main);
//   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
//   if (secondsSinceLastRender < 1 / DIG_SPEED) return;

//   lastRenderTime = currentTime;
//   DIG_SPEED = Math.floor(Math.random() * 3) + 1
//   setDiglett()
//   console.log(DIG_SPEED);
// }

//window.requestAnimationFrame(main);

//on-click event listener for clicking the digletts and adding points to score

