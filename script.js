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
console.log(holes);
console.log(amtHoles);

//generate a random amount of time between minimum seconds and maximum seconds.
function setRandomTime(minTime, maxTime) {
  let time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  return time;
}

console.log(setRandomTime(500, 2000));

//toggle whether the dirt cells have a class of diglett or not
function toggleDiglett() {
  holes.classList.toggle('diglett')
}

//combine random timer and toggle class to change dirt into digletts
function setDiglett() {
  setInterval(toggleDiglett, setRandomTime(500, 2000));
}

setDiglett();

//pick a random spot on the grid to show up using the setRandomTime method to determine when to pop up
function randomPopUp() {
  const randomSpot = (Math.floor(Math.random() * amtHoles));
  holes.forEach((e) => {
    e.classList.remove('diglett');
  })
  console.log(randomSpot);
}

randomPopUp();

//on-click event listener for clicking the digletts and adding points to score

