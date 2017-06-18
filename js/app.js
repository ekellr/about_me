'use strict';
var userPoints = 0;
var myName = 'Elaine';
var movieTimes = 100;

//function for question #5
function isYesAnswer(answer){
  if (answer == 'yes' || answer == 'y') {
    return 1;
  }

  // if it's not correct, tell them to try again
  alert('Wrong! try again');
  return 0;
}

function isNoAnswer(answer){
  if (answer == 'no' || answer == 'n'){
    return 1;
  }

  // if it's not correct, tell them to try again
  alert('Wrong! try again');
  return 0;
}

//function for question #6
function examineGuess(guess, rightAnswer){

  if(guess < rightAnswer) {
    alert('Your guess is too low! Please try again.');
    console.log('The user answer is too low.');
  }
  else {
    if(guess > rightAnswer) {
      alert('Your guess is too high! Please try again.');
      console.log('The user answer is too high.');
    }
    else{
      alert('You got it right!!!');
      console.log('The user answer is right.');
      return 1;
    }
  }
  return 0;
}

alert('Welcome to my guessing game! My name is ' + myName + '!');
console.log('Welcome message');

var user = prompt('What is your name?');
alert('Welcome ' + user);
console.log('The user\'s name is ' + user);

var answer1 = prompt('Is ' + myName + '\'s favorite animal a bird?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer1);

userPoints += isNoAnswer(answer1);

alert(user + ', you have ' + userPoints + ' points.');

var answer2 = prompt('Does ' + myName + ' have 7 chickens?').toLowerCase();
console.log('The user answer is ' + answer2);

userPoints += isYesAnswer(answer2);

alert(user + ', you have ' + userPoints + ' points.');
var answer3 = prompt('Is Matrix ' + myName + '\'s favorite movie?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer3);

userPoints += isNoAnswer(answer3);

alert(user + ', you have ' + userPoints + ' points.');
var answer4 = prompt('Is ' + myName + '\'s favorite food Paleo Pizza?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer4);

userPoints += isYesAnswer(answer4);

alert(user + ', you have ' + userPoints + ' points.');
var answer5 = prompt('Is ' + myName + '\'s favorite car brand Audi?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer5);;

userPoints += isYesAnswer(answer5);

alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

var answer6;
var retryCount = 0;

//question #6
var pointsEarned = 0;
do{
  answer6 = prompt('How many time did I watch the movie Aliens?');
  console.log('The user answer is ' + answer6);

  pointsEarned = examineGuess(answer6, movieTimes);

  retryCount++;
}
while(retryCount < 5 && pointsEarned != 1);
userPoints += pointsEarned;

//question #7
var foodsDislike = ['MSG', 'wheat', 'canola oil', 'soy', 'simple carbs'];

alert('Hi ' + user + '! Let\'s play another game:');
var isCorrect = false;

do{
  var answer7 = prompt('Can you guess what food I try to avoid as much as I can?').toLowerCase();
  console.log(answer7);

  for (var i = 0; i < foodsDislike.length; i++) {
    if(answer7 == foodsDislike [i]){
      console.log('The user \'s guess was ' + foodsDislike);
      userPoints++;
      isCorrect = true;
      break;
    }
  }
  retryCount++;

} while(isCorrect == false && retryCount < 7);

if (isCorrect){
  alert('You got it right!!!!');
}


alert('you have ' + userPoints + ' points.');
console.log('The user \'s total points are ' + userPoints);
