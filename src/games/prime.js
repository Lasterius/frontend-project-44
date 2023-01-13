import game from '../index.js';
import getRandomInterval from '../functions.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const everyRound = () => {
  const randomNumber = getRandomInterval(2, 20);
  const question = randomNumber;
  const isPrime = (n) => {
    let result = '';
    if (n === 2) {
      result = 'prime';
      return result;
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        result = 'composite';
        return result;
      }
      i += 1;
    }
    result = 'prime';
    return result;
  };
  const checking = isPrime(randomNumber);
  const rightAnswer = checking === 'prime' ? 'yes' : 'no';
  return [question, rightAnswer];
};

const primeGame = () => {
  game(condition, everyRound);
};

export default primeGame;
