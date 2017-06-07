'use strict';

// This method returns a boolean value indicating whether or not the result
// is a yes answer.
var isYesAnswer = function(result)
{
  var lowerResult = result.toLowerCase();
  var isYes = false;
  if (lowerResult == 'y' || lowerResult == 'yes') {
    isYes = true;
  }

  console.log('Answer was ' + (isYes ? 'yes' : 'no'));
  return isYes;
};



// This variable will hold the list of answers to the questions we ask. Each
// value will be a boolean (true or false).
var answers = [];

// This is the list of possible animals we can guess.  There are 32
// possible animals.
var guesses = [
  'Cat',
  'Dog',
  'Hedgehog',
  'Buffalo',
  'Possum',
  'Bird',
  'Fox',
  'Horse',
  'Eagle',
  'Chicken',
  'Worm',
  'Lion',
  'Bear',
  'Pig',
  'Squirrel',
  'Wolf',
  'Whale',
  'Fish',
  'Crab',
  'Sponge',
  'Squid',
  'Oyster',
  'Sheep',
  'Goat',
  'Mouse',
  'Rat',
  'Cow',
  'Monkey',
  'Deer',
  'Elk',
  'Gazelle',
  'Giraffe',
  'Elephant',
  'Cricket',
];

alert('Welcome to the animal guessing game!!!!');

var user = prompt('Welcome to the Animal Guessing Game.  You think of an animal and I\'ll guess what it is after asking you 5 simple questions.\n\nWhat is your name?');
console.log('The user\'s name is ' + user);

var wantsToPlayAgain = false;
do {
  alert('Hi ' + user + '! My name is Elaine. Let\'s play!!!\n\nPlease think of an animal.\n\nClick OK when you\'re ready to play');

  var answer = prompt('Does it have fur?', 'type yes or no');
  answers.push(isYesAnswer(answer));

  answer = prompt('Do people keep it as a pet?', 'type yes or no');
  answers.push(isYesAnswer(answer));

  answer = prompt('Can you find it in Washington state?', 'type yes or no');
  answers.push(isYesAnswer(answer));

  answer = prompt('Is it an herbivore?', 'type yes or no');
  answers.push(isYesAnswer(answer));

  answer = prompt('Is it bigger than a breadbox?', 'type yes or no');
  answers.push(isYesAnswer(answer));

  // Based on the answers the user has provided, guess their animal.
  var index = 0;
  var message = 'The user answered ';
  for (var i = 0; i < answers.length; i++)
  {
    if (i > 0)
    {
      message += ', ';
    }

    message += (answers[i] ? 'yes' : 'no');
    var answerValue = answers[i] == true ? 1 : 0;
    index += answerValue * Math.pow(2, i);
  }

  console.log(message + ' which results in a score of ' + index);

  // Look up our guess
  var guess = guesses[index];

  answer = prompt('Is it a ' + guess + '?', 'type yes or no');
  var gotItRight = isYesAnswer(answer);
  if (gotItRight) {
    answer = prompt('Woohoo! I got it right!  \n\nWant to play again?', 'type yes or no');
  }
  else {
    answer = prompt('Oh darn!  Better luck next time I guess.\n\nWant to play again?', 'type yes or no');
  }

  wantsToPlayAgain = isYesAnswer(answer);
  console.log('The user ' + (wantsToPlayAgain ? 'wants' : 'does not want') + ' to play again');
} while (wantsToPlayAgain);

alert('Thanks for playing. :)');
