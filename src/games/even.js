import game from '../index.js';
import getRandomInterval from '../functions.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const everyRound = () => {
  const randomNumber = getRandomInterval(1, 20);
  const question = randomNumber;
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

const evenGame = () => {
  game(condition, everyRound);
};

export default evenGame;
