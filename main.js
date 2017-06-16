var player1 = 'X'
var player2 = 'O'
var currentPlayer = player1;
var board = document.querySelector('.board');
var themeSound = new Audio('Peppa_Pig.mp3');
var muteButton = document.querySelector('.mute');

var mute = function(event){
  event.target.textContent = themeSound.pause();
}

themeSound.play();

var switchTurn = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  }
}

var scribbleSound = new Audio('180443__sseletskyy__pencil-start-02.wav');

var winnerSound = new Audio('149187__adriann__harp-strum.wav');

var checkForWinner = function() {
  if (document.querySelector('.tile1').textContent === 'X' && document.querySelector('.tile2').textContent === 'X' && document.querySelector('.tile3').textContent === 'X') {
    console.log('Peppa Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile1').textContent === 'O' && document.querySelector('.tile2').textContent === 'O' && document.querySelector('.tile3').textContent === 'O') {
    console.log('George Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile4').textContent === 'X' && document.querySelector('.tile5').textContent === 'X' && document.querySelector('.tile6').textContent === 'X') {
    console.log('Peppa Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile4').textContent === 'O' && document.querySelector('.tile5').textContent === 'O' && document.querySelector('.tile6').textContent === 'O') {
    console.log('George Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile7').textContent === 'X' && document.querySelector('.tile8').textContent === 'X' && document.querySelector('.tile9').textContent === 'X') {
    console.log('Peppa Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile7').textContent === 'O' && document.querySelector('.tile8').textContent === 'O' && document.querySelector('.tile9').textContent === 'O') {
    console.log('George Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile1').textContent === 'X' && document.querySelector('.tile4').textContent === 'X' && document.querySelector('.tile7').textContent === 'X') {
    console.log('Peppa Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile1').textContent === 'O' && document.querySelector('.tile4').textContent === 'O' && document.querySelector('.tile7').textContent === 'O') {
    console.log('George Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile2').textContent === 'X' && document.querySelector('.tile5').textContent === 'X' && document.querySelector('.tile8').textContent === 'X') {
    console.log('Peppa Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile2').textContent === 'O' && document.querySelector('.tile5').textContent === 'O' && document.querySelector('.tile8').textContent === 'O') {
    console.log('George Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile3').textContent === 'X' &&  document.querySelector('.tile6').textContent === 'X' && document.querySelector('.tile9').textContent === 'X') {
    console.log('Peppa Wins!' + winnerSound.play());
  } else if (document.querySelector('.tile3').textContent === 'O' && document.querySelector('.tile6').textContent === 'O' && document.querySelector('.tile9').textContent === 'O') {
    console.log('George Wins!' + winnerSound.play());
  }
}

var gameTurn = function(event){
  themeSound.pause();
  event.target.textContent = currentPlayer;
  checkForWinner();
  switchTurn();
  scribbleSound.play();
}

muteButton.addEventListener('click', mute)
board.addEventListener('click', gameTurn)

// create audio when winner console is called and display div banner with winners face and giggle
