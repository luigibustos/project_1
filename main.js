// Constant Game Variables: 
// const options = ['green', 'red', 'blue', 'yellow'];
const sequence = [
];
let round = 0;
let sequenceIdx = 0;

// HTML Elements:

// Simon Button Variables:
const redBtn = document.querySelector('#btn-1')
const blueBtn = document.querySelector('#btn-2')
const greenBtn = document.querySelector('#btn-3')
const yellowBtn = document.querySelector('#btn-4')
const gameBtns = document.querySelectorAll('.game-button')

// Simon Top Button Variables:
const countDownClock = document.getElementById("cd-timer");
const startBtn = document.querySelector('#start-btn')
const roundStat = document.querySelector('#round-stat')

//Function to Generat Sequence and Update Interval Times:
function generateSequence() {
   let randomNum = Math.floor(Math.random() * 4)
   sequence.push({button: gameBtns[randomNum], time: 1000})
   console.log(sequence)
   return sequence
}


// Function to flash each color in the current sequence

function flashButton(callBack) {
   // gameBtns.forEach((button) => (button.classList.remove('active')));
   sequence[sequenceIdx].button.classList.add('active');
   setTimeout(callBack, sequence[sequenceIdx].time)
}

function flashNextButton() {
   setTimeout(() => { gameBtns.forEach((button) => (button.classList.remove('active')));}, 500)
   if(sequenceIdx < sequence.length){
      flashButton(flashNextButton)
      sequenceIdx = ++sequenceIdx
   } else {
      gameBtns.forEach((button) => (button.classList.remove('active')));
      sequenceIdx = 0
      console.log('Sequence Complete')
   }
}

flashNextButton()

// Fucntion to start the round:
function roundStarting(){
   setTimeout(function(){ countDownClock.textContent = "3" }, 1000);
   setTimeout(function(){ countDownClock.textContent = "2" }, 2000);
   setTimeout(function(){ countDownClock.textContent = "1" }, 3000);
   setTimeout(function(){ countDownClock.textContent = "Watch the Sequence" }, 4000);
}

function startRound() {
   round++ 
   roundStat.textContent = round
   generateSequence()
   roundStarting()
   setTimeout(flashNextButton, 5000)
}

startBtn.addEventListener('click', startRound)



