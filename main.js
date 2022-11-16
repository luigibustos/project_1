// Constant Game Variables: 
const options = ['green', 'red', 'blue', 'yellow'];
const sequence = [];
let round = 0;

// HTML Elements:

// Simon Button Variables
const redBtn = document.querySelector('#btn-1')
const blueBtn = document.querySelector('#btn-2')
const greenBtn = document.querySelector('#btn-3')
const yellowBtn = document.querySelector('#btn-4')
const gameBtns = document.querySelectorAll('.game-button')

//Function to Generat Sequence and Update Interval Times
function generateSequence() {
   let randomNum = Math.floor(Math.random() * 4)
   sequence.push({color: options[randomNum], time: 2000})
   // let j = sequence.length
   // for(let i = 0; i < sequence.length; i++) {
   //    sequence[i].time = 1000 * j
   //    j--
   // }
   console.log(sequence)
   return sequence
}

// Function to display the sequence: 

let curLightIdx = 0;

function playSequence(callBack) { 
      if (sequence[curLightIdx].color === 'green'){
         gameBtns.forEach((eachBtn) => (eachBtn.style.backgroundColor = 'grey'));
         greenBtn.style.backgroundColor = 'green'
      } else if (sequence[curLightIdx].color === 'red') { 
         gameBtns.forEach((eachBtn) => (eachBtn.style.backgroundColor = 'grey'));
         redBtn.style.backgroundColor = 'red'
      } else if (sequence[curLightIdx].color === 'blue') {
         gameBtns.forEach((eachBtn) => (eachBtn.style.backgroundColor = 'grey'));
         blueBtn.style.backgroundColor = 'blue'
      } else if (sequence[curLightIdx].color === 'yellow') {
         gameBtns.forEach((eachBtn) => (eachBtn.style.backgroundColor = 'grey'));
         yellowBtn.style.backgroundColor = 'yellow'
      } else {
         console.log('Sequence Complete')
      }
      setTimeout(callBack, sequence[curLightIdx].time)

}

function playNextSequence() {
   gameBtns.forEach((eachBtn) => (eachBtn.style.filter = 'grey'));
   if (curLightIdx < sequence.length) {
      playSequence(playNextSequence);
      curLightIdx = ++curLightIdx 
      console.log(curLightIdx)
   } else (
      console.log('Sequence Complete')
   )
}

// playNextSequence()

// Fucntion to start the round

const startBtn = document.querySelector('#start-btn')
const roundStat = document.querySelector('#round-stat')

function startRound() {
   round++ 
   roundStat.textContent = round
   generateSequence()
}

startBtn.addEventListener('click', startRound)
