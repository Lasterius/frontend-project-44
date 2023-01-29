import startGame from '../index.js';
import { getProgression, getRandomInteger } from '../helpers.js';

const condition = 'What number is missing in the progression?';

const getData = () => {
  const startElement = getRandomInteger(1, 10);
  const progressionStep = getRandomInteger(2, 5);
  const progressionLength = getRandomInteger(5, 10);
  const progression = getProgression(startElement, progressionLength, progressionStep);
  const randomIndex = getRandomInteger(0, 4);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const rightAnswer = String(hiddenElement);
  return [question, rightAnswer];
};

export default () => startGame(condition, getData);
