import startGame from '../index.js';
import { getRandomInteger, getResultOperation } from '../helpers.js';

const condition = 'What is the result of the expression?';

const refreshEveryRound = () => {
  const randomNumber = getRandomInteger(1, 20);
  const randomNumber2 = getRandomInteger(1, 20);
  const arrayOfRandomOperations = ['+', '-', '*'];
  const randomOperation = arrayOfRandomOperations[getRandomInteger(0, 2)];
  const question = `${randomNumber} ${randomOperation} ${randomNumber2}`;
  const rightAnswer = String(getResultOperation());
  return [question, rightAnswer];
};

export default () => {
  startGame(condition, refreshEveryRound);
};
