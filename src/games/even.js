import startGame from '../index.js';
import { getRandomInteger, isEven } from '../helpers.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const question = getRandomInteger(1, 20);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => startGame(condition, getData);
