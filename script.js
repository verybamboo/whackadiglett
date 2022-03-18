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
let scoreDisplay = document.querySelector('.score');
let timerDisplay = document.querySelector('.timer');
let highscoreDisplay = document.querySelector('.highscore');
let amtHoles = holes.length;
let score = 0;
let highscore = 0;


//combine random timer and toggle class to change dirt into digletts
function setDiglett(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));

  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  //puts the diglett at a random spot after checking that there aren't any other diglett type classes
  digletts[randomSpot].classList.add('diglett');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.diglett');
  element.setAttribute("data-increment", 1);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('diglett');
  }, setRandomTime(1000, 1500));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setDugtrio(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));

  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  digletts[randomSpot].classList.add('dugtrio');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.dugtrio');
  element.setAttribute("data-increment", 3);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('dugtrio');
  }, setRandomTime(800, 1400));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setShinyDiglett(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  //puts the diglett at a random spot after checking that the spot doesn't contain any other diglett type classes
  digletts[randomSpot].classList.add('shinyDiglett');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.shinyDiglett');
  element.setAttribute("data-increment", 2);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('shinyDiglett');
  }, setRandomTime(800, 1300));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setShinyDugtrio(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  //puts the diglett at a random spot after checking that the spot doesn't contain any other diglett type classes
  digletts[randomSpot].classList.add('shinyDugtrio');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.shinyDugtrio');
  element.setAttribute("data-increment", 6);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('shinyDugtrio');
  }, setRandomTime(800, 1200));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanShinyDiglett(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  //puts the diglett at a random spot after checking that the spot doesn't contain any other diglett type classes
  digletts[randomSpot].classList.add('alolanShinyDiglett');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.alolanShinyDiglett');
  element.setAttribute("data-increment", 3);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('alolanShinyDiglett');
  }, setRandomTime(800, 1000));
}

//In order to change the time intervals of each type of diglett/dugtrio, multiple functions had to be made
function setAlolanShinyDugtrio(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  //puts the diglett at a random spot after checking that the spot doesn't contain any other diglett type classes
  digletts[randomSpot].classList.add('alolanShinyDugtrio');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.alolanShinyDugtrio');
  element.setAttribute("data-increment", 9);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('alolanShinyDugtrio');
  }, setRandomTime(500, 600));
}

//pikachus are worth negative point, avoid them
function setPikachu(element) {
  //generate a random number called randomSpot to pass into holes as an index to access that specific div
  let randomSpot = (Math.floor(Math.random() * amtHoles));
  //generate a random amount of time between minimum seconds and maximum seconds.
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  //puts the diglett at a random spot after checking that the spot doesn't contain any other diglett type classes
  digletts[randomSpot].classList.add('pikachu');

  //this diglett is worth a certain amount of points when whacked, the score is added to the dynamically created divs and also added to a total value
  var element = document.querySelector('.pikachu');
  element.setAttribute("data-increment", -5);

  //removes the diglett after a specified time
  setTimeout(() => {
    digletts[randomSpot].classList.remove('pikachu');
  }, setRandomTime(1500, 2000));
}

//clears the intervals so the game can end after a set amount of time
function clearSets(one, two, three, four, five, six, seven, eight
) {
  clearInterval(one);
  clearInterval(two);
  clearInterval(three);
  clearInterval(four);
  clearInterval(five);
  clearInterval(six);
  clearInterval(seven);
  clearInterval(eight);
}

//run the game, each interval activates the different functions for putting digletts/dugtrios on the grid, the setInterval sets how often they
//populate the grid while a setTimeout within each of the individual set diglett functions decides how long they stay on the grid before burrowing
//this all runs for a set amount of time before the clearSets function clears all the set intervals thus ending the game
function startGame() {
  //set up random timer here as well
  function setRandomTime(minTime, maxTime) {
    let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    return time;
  }

  score = 0;
  scoreDisplay.textContent = ("Score: " + score);
  let intervalOne = setInterval(setDiglett, setRandomTime(1000, 1500));
  let intervalTwo = setInterval(setDugtrio, setRandomTime(2500, 3000));
  let intervalThree = setInterval(setPikachu, setRandomTime(3500, 4000));
  let intervalFour = setInterval(setShinyDiglett, setRandomTime(1500, 2000));
  let intervalFive = setInterval(setShinyDugtrio, setRandomTime(5500, 6000));
  let intervalSix = setInterval(setAlolanShinyDiglett, setRandomTime(4500, 5000));
  let intervalSeven = setInterval(setAlolanShinyDugtrio, setRandomTime(14500, 15000));
  let timerDown = setInterval(countDown, 1000);

  let timeleft = 59;

  //display the time left on the screen
  function countDown() {
    timeleft--;
    timerDisplay.textContent = ("Seconds:" + timeleft);
  }

  //runs the game then clears all intervals when timer is up thus ending the game
  setTimeout(() => {
    console.log("time is up")
    clearSets(intervalOne, intervalTwo, intervalThree, intervalFour, intervalFive, intervalSix, intervalSeven, timerDown);
  }, 60000);
}

//the whack function tracks the score by parsing the increment value that was added into the specific diglett class as a property
//the increment value is added to score and the current score value is printed onto the screen
//to prevent multiple clicks of the same diglett, once the click event happens, the class is removed
function whack() {
  if (this.classList.contains('diglett')) {
    var audioDiglett = new Audio('diglettsound.mp3');
    audioDiglett.play();
  }
  if (this.classList.contains('dugtrio')) {
    var audioDiglett = new Audio('dugtriosound.mp3');
    audioDiglett.play();
  }
  if (this.classList.contains('pikachu')) {
    var audioDiglett = new Audio('pikachufainting.wav');
    audioDiglett.play();
  }
  if (this.classList.contains('shinyDugtrio')) {
    var audioDiglett = new Audio('dugtriosound.mp3');
    audioDiglett.play();
  }
  if (this.classList.contains('alolanShinyDugtrio')) {
    var audioDiglett = new Audio('dugtriosound.mp3');
    audioDiglett.play();
  }
  if (this.classList.contains('shinyDiglett')) {
    var audioDiglett = new Audio('diglettsound.mp3');
    audioDiglett.play();
  }
  if (this.classList.contains('alolanShinyDiglett')) {
    var audioDiglett = new Audio('diglettsound.mp3');
    audioDiglett.play();
  }
  score += parseInt(this.dataset.increment);
  //this.classList.add('whacked');
  this.classList.remove('diglett');
  this.classList.remove('dugtrio');
  this.classList.remove('shinyDiglett');
  this.classList.remove('shinyDugtrio');
  this.classList.remove('alolanShinyDiglett');
  this.classList.remove('alolanShinyDugtrio');
  this.classList.remove('pikachu');
  scoreDisplay.textContent = ("Score: " + score);
  if (score > highscore) {
    highscore = score;
    highscoreDisplay.textContent = ("Highscore: " + highscore);
  }
}

function mallet() {
  var audioMallet = new Audio('squeaky.mp3');
  audioMallet.play();
}


//On click event that will check the class of what was clicked and if it is a diglett type class then
//turn a diglett / dugtrio back into a dirt class div while also keeping track of the score
digletts.forEach(diglett => diglett.addEventListener('click', whack));

//squeaky mallet just for some laughs
holes.forEach(hole => hole.addEventListener('click', mallet));

//stores the value of score into highscore and only updates if a new highscore is reached
