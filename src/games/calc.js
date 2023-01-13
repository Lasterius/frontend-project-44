import game from '../index.js';
import getRandomInterval from '../functions.js';

const condition = 'What is the result of the expression?';

const everyRound = () => {
  const randomNumber = getRandomInterval(1, 20);
  const randomNumber2 = getRandomInterval(1, 20);
  const arrayOfRandomOperations = ['+', '-', '*'];
  const randomOperation = arrayOfRandomOperations[getRandomInterval(0, 2)];
  const question = `${randomNumber} ${randomOperation} ${randomNumber2}`;
  let resultOperation = 0;
  switch (randomOperation) {
    case '+':
      resultOperation += randomNumber + randomNumber2;
      break;
    case '-':
      resultOperation += randomNumber - randomNumber2;
      break;
    case '*':
      resultOperation += randomNumber * randomNumber2;
      break;
  }
  const rightAnswer = String(resultOperation);
  return [question, rightAnswer];
};

const calcGame = () => {
  game(condition, everyRound);
};

export default calcGame;
