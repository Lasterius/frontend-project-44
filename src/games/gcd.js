import game from '../index.js';
import getRandomInterval from '../functions.js';

const condition = 'Find the greatest common divisor of given numbers.';

const everyRound = () => {
  const randomNumber = getRandomInterval(1, 20);
  const randomNumber2 = getRandomInterval(1, 20);
  const question = `${randomNumber} ${randomNumber2}`;
  const gcd = (n1, n2) => {
    n1 = Math.abs(x);
    n2 = Math.abs(y);
    while (n2) {
      const t = n2;
      n2 = n1 % n2;
      n1 = t;
    }
    return n1;
  };
  const rightAnswer = String(gcd(randomNumber, randomNumber2));
  return [question, rightAnswer];
};

const gcdGame = () => {
  game(condition, everyRound);
};

export default gcdGame;
