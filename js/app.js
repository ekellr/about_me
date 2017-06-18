'use strict';

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

  if(isNaN(guess)){
    alert('Next time, please enter a number.');
  }
  else if(guess < rightAnswer) {
    alert('Your guess is too low! Please try again.');
    console.log('The user answer is too low.');
  }
  else if(guess > rightAnswer) {
    alert('Your guess is too high! Please try again.');
    console.log('The user answer is too high.');
  }
  else{
    alert('You got it right!!!');
    console.log('The user answer is right.');
    return 1;
  }
  return 0;
}

var askQuestion1 = function (){
  var answer1 = prompt('Is ' + myName + '\'s favorite animal a bird?', 'type yes or no').toLowerCase();
  console.log('The user answer is ' + answer1);

  return isNoAnswer(answer1);
};

var askQuestion2 = function (){
  var answer2 = prompt('Does ' + myName + ' have 7 chickens?').toLowerCase();
  console.log('The user answer is ' + answer2);

  return isYesAnswer(answer2);
};

var askQuestion3 = function (){
  var answer3 = prompt('Is Matrix ' + myName + '\'s favorite movie?', 'type yes or no').toLowerCase();
  console.log('The user answer is ' + answer3);

  return isNoAnswer(answer3);
};

var askQuestion4 = function (){
  var answer4 = prompt('Is ' + myName + '\'s favorite food Paleo Pizza?', 'type yes or no').toLowerCase();
  console.log('The user answer is ' + answer4);

  return isYesAnswer(answer4);
};

var askQuestion5 = function (){
  var answer5 = prompt('Is ' + myName + '\'s favorite car brand Audi?', 'type yes or no').toLowerCase();
  console.log('The user answer is ' + answer5);

  return isYesAnswer(answer5);
};

// Question 6--------------------------------------------------------------------------------
var askQuestion6 = function(){
  var answer6;
  var retryCount = 0;
  var pointsEarned = 0;
  do{
    answer6 = prompt('How many times have I watched the movie Aliens?');
    console.log('The user answer is ' + answer6);

    pointsEarned = examineGuess(answer6, movieTimes);

    retryCount++;
  }
  while(retryCount < 4 && pointsEarned != 1);
  return pointsEarned;
};

// Question 7--------------------------------------------------------------------------------
var askQuestion7 = function(){
  var foodsDislike = ['MSG', 'wheat', 'canola oil', 'soy', 'simple carbs'];
  var rightAnswersMessage = 'Here are all the foods I dislike: ' + foodsDislike;

  alert('Hi ' + user + '! Let\'s play another game:');
  var isCorrect = false;
  var retryCount = 0;

  do{
    var answer7 = prompt('Can you guess what food I try to avoid as much as I can?').toLowerCase();
    console.log(answer7);

    for (var i = 0; i < foodsDislike.length; i++) {
      if(answer7 == foodsDislike [i].toLowerCase()){
        console.log('The user \'s guess was ' + foodsDislike);
        isCorrect = true;
        break;
      }
    }

    retryCount++;

    // Give feedback to the users
    if (isCorrect){
      alert(user + ', you got it right!!!! ' + rightAnswersMessage);
    }
    else{
      var message = user + ', you got it wrong.';
      if (retryCount < 6){
        message += ' Please, try again!';
      }
      else{
        message += rightAnswersMessage;
      }
      alert(message);
    }
  } while(isCorrect == false && retryCount < 6);

  return isCorrect ? 1 : 0;
};

//
//Main program
//
var userPoints = 0;
var myName = 'Elaine';
var movieTimes = 100;

alert('Welcome to my guessing game! My name is ' + myName + '!');
console.log('Welcome message');

var user = prompt('What is your name?');
alert('Welcome ' + user);
console.log('The user\'s name is ' + user);

userPoints += askQuestion1();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

userPoints += askQuestion2();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

userPoints += askQuestion3();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

userPoints += askQuestion4();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

userPoints += askQuestion5();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

userPoints += askQuestion6();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');

userPoints += askQuestion7();
alert(user + ', you have ' + userPoints + ' points.');
console.log('The user has ' + userPoints + ' points!!!');
