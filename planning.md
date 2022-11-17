# Project_1 Simon Game

## MVP:

1.

## Offical Game Instructions:

1. Press the 'on' button on the front of the game unit. Lights and sounds will play.
2. The green light will falsh. Press it to start the game.
3. A color will flash. Repeat the sequence by pressing the same color.
4. The game will continue. After each light sequence that you repeat succesfully, a light will be added to the end. (The Sequence for each game stays the same, adds 1 every round, till you fail)
5. Whne you dont complete a sequence succesfully, the SIMON game will play a fail sound and display your score.
6. Scoring: Score is displayed as a series of lights and sounds.

## Translate Game Instructions to Browser Base:

1. Press 'Start' button in center game screen to start the game
2. The center game screen will countdown from 3 and then play the round sequence
3. After the sequence is played, the center game screen will indicate 'Your Turn'
4. Repeat the sequence by pressing each color - total score increase by 1 for each sucesful input
5. If the player sucesfully repeates the entire sequence, round indicator will increase by 1 and the sequence increse by 1
6. Repeat steps 2-5 till player fails
7. After player fails, total score will be displayed in center game screen

### JavaScript Functionality

1. Store 4 colors in array
2. Store Sequence in an empty array
3. Function to generate a random color that pushes the color into the sequence
4. Function to play the current sequence
5. Function to play sequence, then prompt user to repeat sequence
6. Condition to check that each input corresponds to the sequence
7. If Sequence is succesfully repeated, generate random color, then push to the sequence

### Simon Game CSS

1. Housing Cirlce (Outside)
2. 4 Half Circles for each color button (Inside Housing Circle)
3. Center Game Indicator (In the middle of the Housing Circle, surrounded by 4 half circles)

### Pseudo Code:

1. Start with a list of four colors and an empty object
   A. colorsArray = ['red', 'blue', 'green', 'yellow' ]
   B. Sequence = [{color:'', time:'sequence.length * 1000'}]
   B.1 The Sequence will be stored in an object in order to set the style.background and interval time
   B.2 The Sequence object will also be used to build the object, setting a random color, and interval time to sequence.length \* 10000
2. Push random color to the empty object and assign a timeout amount
3. Render Colors in order of the obj's index/length
4. Prompt User to input each color, in the same order of the sequence
5. Check if user input is equal to indx color
6. For each correct answer add one point to the total score

### Round Structure

1. Play Sequence
2. Input Sequence
3. Calculate Total

### MVP GOALS:

1. Create a Function to Generate a Random Sequence
2. Create a Function to play the current Sequence
3. Create a Function to Recieve input from the player and check against the sequence
4. Loop through each function at the start of each round
