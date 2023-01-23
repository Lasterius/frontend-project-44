import startGame from '../index.js';
import { getRandomInteger, calculate } from '../helpers.js';

const condition = 'What is the result of the expression?';

const refreshEveryRound = () => {
  const randomNumber = getRandomInteger(1, 20);
  const randomNumber2 = getRandomInteger(1, 20);
  const arrayOfRandomOperators = ['+', '-', '*'];
  const randomOperator = 
    arrayOfRandomOperators[getRandomInteger(0, arrayOfRandomOperators.length - 1)];
  const question = `${randomNumber} ${randomOperator} ${randomNumber2}`;
  const resultOfOperation = calculate(randomOperator, randomNumber, randomNumber2);
  const rightAnswer = String(resultOfOperation);
  return [question, rightAnswer];
};

export default () => startGame(condition, refreshEveryRound);
