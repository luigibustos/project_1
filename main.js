// Constant Game Variables: 
const sequence = [];
let userInput = [];
let currentSeq = []
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
      console.log('Sequence Complete')
      playerTurn()
      return sequenceIdx = 0
   }
}

// Function to check player input against sequence
function playerTurn() {
   countDownClock.textContent = 'Your Turn'
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
         countDownClock.textContent = 'Round Complete'
         startGame()
         return console.log('Player Turn Over')
      }
   } else {
      gameBtns.forEach((button) => {
         button.classList.remove('hoverActive')
         button.removeEventListener('click', checkInput)
      })
      console.log('Game Over!')
      if(alert('Game Over!')){}
      else window.location.reload(); 
   }
}

// Fucntion to indicate the round is starting:
function roundStarting(){
   setTimeout(function(){ countDownClock.textContent = "3" }, 1000);
   setTimeout(function(){ countDownClock.textContent = "2" }, 2000);
   setTimeout(function(){ countDownClock.textContent = "1" }, 3000);
   setTimeout(function(){ countDownClock.textContent = "Watch the Sequence" }, 4000);
   return
}

function startGame() {
   round++ 
   roundStat.textContent = round
   startBtn.remove()
   generateSequence()
   roundStarting()
   setTimeout(flashNextButton, 5000)
}

startBtn.addEventListener('click', startGame)