$(document).ready(start);

// event listeners
function start () {
    $('#startGame').on('click', clickStart);
}

function clickStart () {
   console.log('clicked in clickStart');

//    let $input = $('<input type="number>');
    let $container = $('#mainContainer');
   $container.append('<div><label>Player 1</label><input type="number" id="playerOne"></div>')
   $container.append('<div><label>Player 2</label><input type="number" id="playerTwo"></div>')
   $container.append('<div><label>Player 3</label><input type="number" id="playerThree"></div>')
   $container.append('<div><label>Player 4</label><input type="number" id="playerFour"></div>')
   $container.append('<div><button id="submitUserGuess">Submit Guess</button><button id="cancelGame">Quit Loser</button></div>')
   $(this).remove();
   // get dropdown value
}

function cancelSubmit () {
    
}