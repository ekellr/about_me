'use strict';
var userPoints = 0;
var myName = 'Elaine';
var movieTimes = 100;
var numberOfQuestions = 7;
var answer;
var answerArray = [];

// definition of isRight function
function isRight(answer, rightAnswer) {
  if (answer === rightAnswer || answer === rightAnswer[0]) {
    // if it's not correct, tell them to try again
    userPoints++;
  } else {
    // if it's correct, give them a point
    alert('Wrong! try again');
  }
  alert('you have ' + userPoints + ' points.');
}

alert('Welcome to my guessing game! My name is ' + myName + '!');
console.log('Welcome message');

var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);


answer = prompt('Is ' + myName + '\'s favorite animal a bird?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer);

// if (answer1 === 'yes' || answer1 === 'y') {
//   // if it's correct, give them a point
//   alert('Wrong! try again');
// } else {
//   // if it's not correct, tell them to try again
//   userPoints++;
// }

answerArray.push(answer);

var rightAnswer = 'no';
isRight(answer, rightAnswer);

// alert('you have ' + userPoints + ' points.');

answer = prompt('Does ' + myName + ' have 7 chickens?').toLowerCase();
console.log('The user answer is ' + answer);

// if (answer2 === 'yes' || answer2 === 'y') {
//   // if it's correct, give them a point
//   userPoints++;
// } else {
//   // if it's not correct, tell them to try again
//   alert('Wrong! try again');
// }

answerArray.push(answer);

var rightAnswer = 'yes';
isRight(answer, rightAnswer);

// alert('you have ' + userPoints + ' points.');
answer = prompt('Is Matrix ' + myName + '\'s favorite movie?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer);

// if (answer3 === 'yes' || answer3 === 'y') {
//   // if it's correct, give them a point
//   alert('Wrong! try again');
//
// } else {
//   // if it's not correct, tell them to try again
//   userPoints++;
// }


answerArray.push(answer);

var rightAnswer = 'no';
isRight(answer, rightAnswer);

// alert('you have ' + userPoints + ' points.');
answer = prompt('Is ' + myName + '\'s favorite food Paleo Pizza?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer);

// if (answer4 === 'yes' || answer4 === 'y') {
//   // if it's correct, give them a point
//   userPoints++;
// } else {
//   // if it's not correct, tell them to try again
//   alert('Wrong! try again');
// }


answerArray.push(answer);

var rightAnswer = 'yes';
isRight(answer, rightAnswer);

// alert('you have ' + userPoints + ' points.');
answer = prompt('Is ' + myName + '\'s favorite car brand Audi?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer);

// if (answer5 === 'yes' || answer5 === 'y') {
//   // if it's correct, give them a point
//   userPoints++;
// } else {
//   // if it's not correct, tell them to try again
//   alert('Wrong! Thanks for playing with me!!!!');
// }


answerArray.push(answer);

var rightAnswer = 'yes';
isRight(answer, rightAnswer);

// alert('You have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

var answer6;
var retryCount = 0;

do{
  answer6 = prompt('How many time did I watch the movie Aliens?');
  console.log('The user answer is ' + answer6);

  if(answer6 < movieTimes) {
    alert('Your guess is too low! Please try again.');
    console.log('The user answer is too low.');
  }
  else {
    if(answer6 > movieTimes) {
      alert('Your guess is too high! Please try again.');
      console.log('The user answer is too high.');
    }
    else{
      alert('You got it right!!!');
      console.log('The user answer is right.');
      userPoints++;
      break;
    }
  }
  retryCount++;
}

while(retryCount < 5);

//question #7
var foodsDislike = ['MSG', 'wheat', 'canola oil', 'soy', 'simple carbs'];

alert('Hi ' + user + '! Let\'s play another game:');
var isCorrect = false;

var answer7 = prompt('Can you guess what food I try to avoid as much as I can?').toLowerCase();
console.log(answer7);

for (var i = 0; i < foodsDislike.length; i++) {
  if(answer7 == foodsDislike[i]){
    console.log('The user \'s guess was ' + foodsDislike);
    userPoints++;
    isCorrect = true;
    break;
  }
}
if (isCorrect){
  alert('You got it right!!!!');
}

alert('you have ' + userPoints + ' points.');
console.log('The user \'s total points are ' + userPoints);
