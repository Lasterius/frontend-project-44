import startGame from '../index.js';
import { getRandomInteger, getGCD } from '../helpers.js';

const condition = 'Find the greatest common divisor of given numbers.';

const refreshEveryRound = () => {
  const randomNumber = getRandomInteger(1, 20);
  const randomNumber2 = getRandomInteger(1, 20);
  const question = `${randomNumber} ${randomNumber2}`;
  const rightAnswer = String(getGCD(randomNumber, randomNumber2));
  return [question, rightAnswer];
};

export default () => startGame(condition, refreshEveryRound);
