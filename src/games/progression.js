import startGame from '../index.js';
import { getProgression, hiddenElement } from '../helpers.js';

const condition = 'What number is missing in the progression?';

const refreshEveryRound = () => {
  const question = getProgression();
  const rightAnswer = String(hiddenElement);
  return [question, rightAnswer];
};

export default () => {
  startGame(condition, refreshEveryRound);
};
