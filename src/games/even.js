import startGame from '../index.js';
import { getRandomInteger, isEven } from '../helpers.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const refreshEveryRound = () => {
  const question = getRandomInteger(1, 20);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => startGame(condition, refreshEveryRound);
