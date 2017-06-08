'use strict';
var userPoints = 0;
var myName = 'Elaine';
var movieTimes = 100;
var numberOfQuestions = 7;


alert('Welcome to my guessing game! My name is ' + myName + '!');
console.log('Welcome message');

var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);


var answer1 = prompt('Is ' + myName + '\'s favorite animal a bird?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer1);


if (answer1 === 'yes' || answer1 === 'y') {
  // if it's correct, give them a point
  alert('Wrong! try again');
} else {
  // if it's not correct, tell them to try again
  userPoints++;
}

alert('you have ' + userPoints + ' points.');

var answer2 = prompt('Does ' + myName + ' have 7 chickens?').toLowerCase();
console.log('The user answer is ' + answer2);

if (answer2 === 'yes' || answer2 === 'y') {
  // if it's correct, give them a point
  userPoints++;
} else {
  // if it's not correct, tell them to try again
  alert('Wrong! try again');
}

alert('you have ' + userPoints + ' points.');
var answer3 = prompt('Is Matrix ' + myName + '\'s favorite movie?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer3);

if (answer3 === 'yes' || answer3 === 'y') {
  // if it's correct, give them a point
  alert('Wrong! try again');

} else {
  // if it's not correct, tell them to try again
  userPoints++;
}

alert('you have ' + userPoints + ' points.');
var answer4 = prompt('Is ' + myName + '\'s favorite food Paleo Pizza?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer4);

if (answer4 === 'yes' || answer4 === 'y') {
  // if it's correct, give them a point
  userPoints++;
} else {
  // if it's not correct, tell them to try again
  alert('Wrong! try again');
}

alert('you have ' + userPoints + ' points.');
var answer5 = prompt('Is ' + myName + '\'s favorite car brand Audi?', 'type yes or no').toLowerCase();
console.log('The user answer is ' + answer5);;

if (answer5 === 'yes' || answer5 === 'y') {
  // if it's correct, give them a point
  userPoints++;
} else {
  // if it's not correct, tell them to try again
  alert('Wrong! Thanks for playing with me!!!!');
}

alert('You have ' + userPoints + ' points.');
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
      alert('You got it right!!!')
      console.log('The user answer is right.');
      userPoints++;
      break;
    }
  }
  retryCount++;
}

while(retryCount < 5);

var foodsDisike = ['MSG', 'wheat', 'canola oil', 'soy', 'simple carbs'];
alert('Hi ' + user + '! Let\'s play another game:');

var answer7 = prompt('Can you guess what food I avoid as much as I can?';
console.log(answer7);



for (var i = 0; i < 5; i++) {
  console.log(foodsILike[i]);
}

foodsILike.push('swiss chard');
console.log('The user \'s guess was ' + foodsILike);

// pop removes an element from the end of the array
var veggie = foodsILike.pop();
console.log('The user \'s guess was ' + foodsILike);

// unshift adds elements to the front of the array
foodsILike.unshift('spinach');
console.log(foodsILike);

foodsILike.shift();
console.log(foodsILike)

// indexOf tells you the index of an element in the array; returns -1 if not found
var index = foodsILike.indexOf('popcorn');
console.log(index);

} else {
  // if it's not correct, tell them to try again
  alert('Wrong! try again');
}

alert('you have ' + userPoints + ' points.');
console.log('The user \'s total points are ' + userPoints);
