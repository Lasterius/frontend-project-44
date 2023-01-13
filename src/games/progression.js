import game from '../index.js';
import { getRandomInterval } from '../functions.js';

const condition = 'What number is missing in the progression?';

const everyRound = () => {
  let hiddenElement = 0;
  const progression = () => {
    let result = [];
    let startElement = getRandomInterval(1, 10);
    let plusElement = getRandomInterval(2, 5);
    for (let j = 1; j <= getRandomInterval(5, 10); j += 1) {
      startElement += plusElement;
      result.push(startElement);
    }
    let randomIndex = getRandomInterval(0, 5);
    hiddenElement = result[randomIndex];
    result[randomIndex] = '..';
    return result.join(' ');
  };
  const question = progression();
  const rightAnswer = String(hiddenElement);
  return [question, rightAnswer];
};

const progressionGame = () => {
  game(condition, everyRound);
};

export default progressionGame;
