//Make a 5x5 grid of boxes, each grid cell is a dirt div and within each dirt div is a diglett type div
function makeGrid() {
  for (var i = 0; i < 5; i++) {
    var row = document.createElement('div');
    row.className = "row";
    for (var j = 0; j < 5; j++) {
      var dirt = document.createElement('div');
      var diglettTypes = document.createElement('div');
      dirt.className = "dirt";
      diglettTypes.className = "digletts"
      row.appendChild(dirt);
      dirt.appendChild(diglettTypes);
    }
    document.querySelector('.grid').appendChild(row);
  }
}
makeGrid();

//stating the variables that will hold global values for use/access later
let holes = document.querySelectorAll('.dirt');
let digletts = document.querySelectorAll('.digletts');
let scoreDisplay = document.querySelector('scoreboard');
let amtHoles = holes.length;
let score = 0;
//let runGame = false;
//console.log(holes);
//console.log(amtHoles);

//combine random timer and toggle class to change dirt into digletts
function setDiglett() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));

  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("diglett");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('diglett');
  }, setRandomTime(1000, 1500));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setDugtrio() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("dugtrio");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('dugtrio');
  }, setRandomTime(1500, 2000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setShinyDiglett() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("shinyDiglett");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('shinyDiglett');
  }, setRandomTime(1000, 2000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setShinyDugtrio() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("shinyDugtrio");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('shinyDugtrio');
  }, setRandomTime(800, 1500));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanShinyDiglett() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("alolanShinyDiglett");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('alolanShinyDiglett');
  }, setRandomTime(1000, 1500));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanShinyDugtrio() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("alolanShinyDugtrio");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('alolanShinyDugtrio');
  }, setRandomTime(500, 1000));
}

function setPikachu() {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  //moves the diglett around the grid by toggling the class of the grid from dirt to diglett and when switching back to dirt class, it also removes
  //diglett from the class list
  //puts the diglett at a random spot
  digletts[randomSpot].classList.add("pikachu");
  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('pikachu');
  }, setRandomTime(1500, 2000));
}

//clears the intervals so the game can end after a set amount of time
function clearSets(one, two, three, four, five, six, seven) {
  clearInterval(one)
  clearInterval(two)
  clearInterval(three)
  clearInterval(four)
  clearInterval(five)
  clearInterval(six)
  clearInterval(seven)
}

//run the game, each interval activates the different functions for putting digletts/dugtrios on the grid, the setInterval sets how often they
//populate the grid while a setTimeout within each of the individual set diglett functions decides how long they stay on the grid before burrowing
//this all runs for a set amount of time before the clearSets function clears all the set intervals thus ending the game
function startGame() {
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    //console.log(time);
    return time;
  }
  score = 0;
  let intervalOne = setInterval(setDiglett, setRandomTime(1000, 1500));
  let intervalTwo = setInterval(setDugtrio, setRandomTime(2500, 3000));
  let intervalThree = setInterval(setPikachu, setRandomTime(3500, 4000));
  let intervalFour = setInterval(setShinyDiglett, setRandomTime(1500, 2000));
  let intervalFive = setInterval(setShinyDugtrio, setRandomTime(5500, 6000));
  let intervalSix = setInterval(setAlolanShinyDiglett, setRandomTime(4500, 5000));
  let intervalSeven = setInterval(setAlolanShinyDugtrio, setRandomTime(14500, 15000));
  setTimeout(() => {

    console.log("time is up")
    clearSets(intervalOne, intervalTwo, intervalThree, intervalFour, intervalFive, intervalSix, intervalSeven);
  }, 60000);

}

function whack(e) {
  console.log(e);
}

//On click event that will check the class of what was clicked and if it is a diglett type class then
//turn a diglett / dugtrio back into a dirt class div while also keeping track of the score
digletts.forEach(diglett => diglett.addEventListener('click', whack));

