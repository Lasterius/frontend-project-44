import startGame from '../index.js';
import { getRandomInteger, isEven } from '../helpers.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const refreshEveryRound = () => {
  const randomNumber = getRandomInteger(1, 20);
  const question = randomNumber;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  startGame(condition, refreshEveryRound);
};
