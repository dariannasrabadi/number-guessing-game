class GuessLog {
    constructor (guess1, guess2, guess3, guess4, max) {
        this.guess1 = guess1;
        this.guess2 = guess2;
        this.guess3 = guess3;
        this.guess4 = guess4;
        this.max = max;
    }
    // highLow (num) {
    //     if (this.guess1 > num)
    // }
}
let maxNum; // used to store max number selected
$(document).ready(start);

// event listeners
function start () {
    $('#startGame').on('click', clickStart);
    $('#mainContainer').on('click', '#cancelGame', cancel);
    $('#mainContainer').on('click', '#submitUserGuess', submitGuess);
}

function clickStart () {
   console.log('clicked in clickStart');

//    let $input = $('<input type="number>');
    let $container = $('#mainContainer');
   $container.append('<div id="one"><label>Player 1</label><input type="number" id="playerOne"></div>')
   $container.append('<div id="two"><label>Player 2</label><input type="number" id="playerTwo"></div>')
   $container.append('<div id="three"><label>Player 3</label><input type="number" id="playerThree"></div>')
   $container.append('<div id="four"><label>Player 4</label><input type="number" id="playerFour"></div>')
   $container.append('<div><button id="submitUserGuess">Submit Guess</button><button id="cancelGame">Quit Loser</button></div>')
   maxNum = $('#dropDown option:selected').text();
   console.log('this is the max num upon click start:', maxNum);
   
   $(this).toggle();
   $('#dropDown').toggle();
   // get dropdown value
}// end clickStart

//cancel button functions 
function cancel () {
console.log('cancel button has been clicked');
// $('#statContainer').append();
$('#startGame').toggle();
$('#dropDown').toggle();
$('#mainContainer').empty();
}// end cancel Submit

// submit button functions 
function submitGuess () {
    console.log('submit button clicked');
    let userInput = new GuessLog($('#playerOne').val(), $('#playerTwo').val(), $('#playerThree').val(), $('#playerFour').val(), maxNum);
    console.log(userInput);
}

// To DO
// round number = every submit click
// total guess counter = total number of guesses overall
// create max number indicator = indicates the max number on page so dummys don't forget.
// high or low

//after server. 
// reset button to restart game upon winning.  
