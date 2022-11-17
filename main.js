// Constant Game Variables: 
// const options = ['green', 'red', 'blue', 'yellow'];
const sequence = [];
let userInput = [];
let round = 0;
let sequenceIdx = 0

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
   // sequence.push({button: gameBtns[randomNum], time: 1000})
   sequence.push(gameBtns[randomNum])
   console.log(sequence)
   return sequence
}

// Function to flash each color in the current sequence
function flashButton(callBack) {
   sequence[sequenceIdx].classList.add('active');
   // setTimeout(callBack, sequence[sequenceIdx].time)
   setTimeout(callBack, 1000)
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


// Function to take in user input, then check agains the sequence
// turn
// copy sequence
// activate hover and event lst
// check input of even list, if true, remove first element
// keep going until array is empy

let currentSeq = []
function playerTurn() {
   currentSeq = [...sequence]
   gameBtns.forEach((button) => {
      button.classList.add('hoverActive')
      button.addEventListener('click', checkInput)
   })
   return currentSeq
}

function checkInput(event) {
   console.log(currentSeq)
   userInput = event.target.id
   if(userInput === currentSeq[0].id) {
      console.log('Correct!')
      currentSeq.splice(0,1)
      console.log(currentSeq)
      if (currentSeq.length === 0) {
         gameBtns.forEach((button) => {
            button.classList.remove('hoverActive')
            button.removeEventListener('click', checkInput)
         })
         return console.log('Player Turn Over')
      }
   } else {
      gameBtns.forEach((button) => {
         button.classList.remove('hoverActive')
         button.removeEventListener('click', checkInput)
      })
      console.log('Game Over!')
      return alert('Game Over!')
   }
}

// Fucntion to start the round:
function roundStarting(){
   setTimeout(function(){ countDownClock.textContent = "3" }, 1000);
   setTimeout(function(){ countDownClock.textContent = "2" }, 2000);
   setTimeout(function(){ countDownClock.textContent = "1" }, 3000);
   setTimeout(function(){ countDownClock.textContent = "Watch the Sequence" }, 4000);
}

function startRound() {
   // Increase Round Counter
   round++ 
   roundStat.textContent = round
   // Generate Next Sequence
   generateSequence()
   // Countdown Begins 3..2..1
   roundStarting()
   // Sequence PLays
   setTimeout(flashNextButton, 5000)
   // Player is allowed to input the sequence
   // Check if EACH input matches to the sequence idx
   // Turn off player input and end round
}

startBtn.addEventListener('click', startRound)



