import startGame from '../index.js';
import { getRandomInteger, isPrime } from '../helpers.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const refreshEveryRound = () => {
  const numberInQuestion = getRandomInteger(2, 20);
  const question = numberInQuestion;
  const rightAnswer = isPrime(numberInQuestion) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  startGame(condition, refreshEveryRound);
};
