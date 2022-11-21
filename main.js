// Constant Game Variables: 
const sequence = [];
let userInput = [];
let currentSeq = []
let round = 0;
let sequenceIdx = 0

// HTML Elements:

// Simon Button Variables:
const gameBtns = document.querySelectorAll('.game-button')

// Simon Top Button Variables:
const countDownClock = document.getElementById("cd-timer");
const startBtn = document.querySelector('#start-btn')
const roundStat = document.querySelector('#round-stat')

//Function to Generat Sequence and Update Interval Times:
function generateSequence() {
   let randomNum = Math.floor(Math.random() * 4)
   sequence.push(gameBtns[randomNum])
   return sequence
}

// Function to flash each color in the current sequence
function flashButton(callBack) {
   sequence[sequenceIdx].classList.add('active');
   if(sequence[sequenceIdx] === gameBtns[0]) {
      redBtn.play()
   } else if(sequence[sequenceIdx] === gameBtns[1]) {
      blueBtn.play()
   } else if(sequence[sequenceIdx] === gameBtns[2]) {
      greenBtn.play()
   } else if(sequence[sequenceIdx] === gameBtns[3]){
      yellowBtn.play()
   }
   setTimeout(callBack, 1000)
}

function flashNextButton() {
   setTimeout(() => { gameBtns.forEach((button) => (button.classList.remove('active')));}, 500)
   if(sequenceIdx < sequence.length){
      flashButton(flashNextButton)
      sequenceIdx = ++sequenceIdx
   } else {
      gameBtns.forEach((button) => (button.classList.remove('active')));
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
      button.addEventListener('click', gameButtonAudio)
   })
   return currentSeq
}

function checkInput(event) {
   userInput = event.target.id
   if(userInput === currentSeq[0].id) {
      currentSeq.splice(0,1)
      if (currentSeq.length === 0) {
         gameBtns.forEach((button) => {
            button.classList.remove('hoverActive')
            button.removeEventListener('click', checkInput)
            button.removeEventListener('click', gameButtonAudio)
         })
         countDownClock.textContent = 'Round Complete'
         playSuccessAudio()
         return startGame()
      }
   } else {
      playGameOverAudio()
      countDownClock.textContent = 'Game Over'
      gameBtns.forEach((button) => {
         button.classList.remove('hoverActive')
         button.removeEventListener('click', checkInput)
         button.removeEventListener('click', gameButtonAudio)
      })
      setTimeout(() => {
         if(alert('Click OK to start a new game')){}
         else window.location.reload() 
      }, 2000)
   }
}

// Fucntion to indicate the round is starting:
function roundStarting(){
   setTimeout(function(){ countDownClock.textContent = "3", countDownAudio()}, 1000);
   setTimeout(function(){ countDownClock.textContent = "2", countDownAudio() }, 2000);
   setTimeout(function(){ countDownClock.textContent = "1", countDownAudio() }, 3000);
   setTimeout(function(){ countDownClock.textContent = "Watch the Sequence", beginRoundAudio() }, 4000);
   return
}

// Function to start each round
function startGame() {
   round++ 
   roundStat.textContent = round
   startBtn.remove()
   generateSequence()
   roundStarting()
   setTimeout(flashNextButton, 5000)
}

startBtn.addEventListener('click', startGame)
startBtn.addEventListener('click', clickAudio)

// Simon Audio
const redBtn =  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
const blueBtn = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
const greenBtn = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
const yellowBtn = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')

function playSuccessAudio() {
   const audioSuccess = new Audio('assets/audio/Success2.mp3')
   audioSuccess.play()
}

function playGameOverAudio() {
   const audioGameOver = new Audio('assets/audio/3-34 Sub-Game Lose.mp3')
   audioGameOver.play()
}

function clickAudio() {
   const audioClick = new Audio('assets/audio/click-audio.mp3')
   audioClick.play()
}

function countDownAudio() {
   const countDownBeep = new Audio('assets/audio/count-down-audio.mp3')
   countDownBeep.play()
}

function beginRoundAudio() {
   const countDownStart = new Audio('assets/audio/count-down-end-audio.mp3')
   countDownStart.play()
}

function gameButtonAudio(event) {
   if(event.target.id === gameBtns[0].id) {
      redBtn.play()
   } else if(event.target.id === gameBtns[1].id) {
      blueBtn.play()
   } else if(event.target.id === gameBtns[2].id) {
      greenBtn.play()
   } else if(event.target.id === gameBtns[3].id){
      yellowBtn.play()
   }
}