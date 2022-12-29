#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();

console.log(`Hello, ${userName}!`);

const getRandomInt = (max) => Math.floor(Math.random() * max);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(20);
    console.log(`Question: ${randomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');

    const checking1 = randomNumber % 2 === 0 && answerUser === 'yes';
    const checking2 = randomNumber % 2 !== 0 && answerUser === 'no';

    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else {
      const opposite = answerUser === 'yes' ? 'no' : 'yes';
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`;
      return errorMessage;
    }
  }

  const result = `Congratulations, ${userName}!`;
  return result;
};

console.log(evenGame());
