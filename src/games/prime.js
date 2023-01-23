import startGame from '../index.js';
import { getRandomInteger, isPrime } from '../helpers.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const refreshEveryRound = () => {
  const randomNumber = getRandomInteger(2, 20);
  const question = randomNumber;
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => startGame(condition, refreshEveryRound);
