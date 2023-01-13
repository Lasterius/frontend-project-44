import game from '../index.js';
import getRandomInterval from '../functions.js';

const condition = 'Find the greatest common divisor of given numbers.';

const everyRound = () => {
  const randomNumber = getRandomInterval(1, 20);
  const randomNumber2 = getRandomInterval(1, 20);
  const question = `${randomNumber} ${randomNumber2}`;
  const gcd = (x, y) => (x % y === 0 ? y : gcd(y, x % y));
  const rightAnswer = String(gcd(randomNumber, randomNumber2));
  return [question, rightAnswer];
};

const gcdGame = () => {
  game(condition, everyRound);
};

export default gcdGame;
