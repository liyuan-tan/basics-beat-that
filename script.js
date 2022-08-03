//Global variables
var mode = 0;
var playerCount = 0;
var player = 1;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var dice1 = "";
var dice2 = "";
var scoreBoard = [];

//Function Scope: 6 sided dice
function randomRoll() {
  var randomDecimal = Math.random() * 6;
  var randomInt = Math.ceil(randomDecimal);
  return randomInt;
}

//Block code: Number of Players
var selectPlayerCount = function (input) {
  for (var counter = 0; counter < input; counter += 1) {
    scoreBoard.push(0);
    console.log(scoreBoard);
  }
  message = `Total number of players selected is ${input}, press submit to roll dice.`;
  return message;
};

//Block code: Dice roll
var gameRoll = function () {
  dice1 = randomRoll();
  dice2 = randomRoll();
  message = `Player ${player}, your rolls are ${dice1} and ${dice2}.
  <br> Please choose the order of the dice by inputting 1 or 2.
  <br> Current score is ${scoreBoard}.`;
  return message;
};

//Block code: Dice order
var gameOutcome = function (input) {
  console.log(dice1);
  console.log(dice2);
  if (input == 1) {
    var endNum = dice1 * 10 + dice2;
  } else if (input == 2) {
    var endNum = dice2 * 10 + dice1;
  }
  scoreBoard[player - 1] = scoreBoard[player - 1] + endNum;
  if (player == playerCount) {
    message = `Player ${player}, your number is ${endNum}.
  <br> It's player 1's turn. Press submit to roll dice.
  <br> Current score is ${scoreBoard}.`;
    console.log(scoreBoard);
    player = 0;
  } else {
    message = `Player ${player}, your number is ${endNum}.
  <br> It's player ${player + 1}'s turn. Press submit to roll dice.
  <br> Current score is ${scoreBoard}.`;
    console.log(scoreBoard);
  }
  return message;
};

var main = function (input) {
  var myOutputValue = "";
  if (mode == 0) {
    if (input > 1) {
      playerCount = input;
      myOutputValue = selectPlayerCount(input);
      mode = 1;
    } else return "Please input number of players (at least 2).";
  } else if (mode == 1) {
    myOutputValue = gameRoll();
    mode = 2;
  } else if (mode == 2) {
    if (input != 1 && input != 2) {
      return "Typo dectected, please choose either order 1 or 2.";
    } else {
      myOutputValue = gameOutcome(input);
      player = player + 1;
      mode = 1;
    }
  }
  return myOutputValue;
};
