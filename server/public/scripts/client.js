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
   $(this).toggle();
   // get dropdown value
}// end clickStart

//cancel button functions 
function cancel () {
console.log('cancel button has been clicked');
// $('#statContainer').append();
$('#startGame').toggle();
$('#mainContainer').empty();
}// end cancel Submit

// submit button functions 
function submitGuess () {
    console.log('submit button clicked');
}
