const sequence = [];
const options = ['green', 'red', 'blue', 'yellow']

function generateSequence() {
   let randomNum = Math.floor(Math.random() * 4)
   sequence.push(options[randomNum])
   return sequence
}

