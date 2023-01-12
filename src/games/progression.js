import readlineSync from 'readline-sync';

const progressionGame = () => {
  console.log('What number is missing in the progression?');

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const getRandomInterval = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  let hiddenElement = 0;

  for (let i = 0; i < 3; i += 1) {
    const progression = () => {
      let result = [];
      let startElement = getRandomInt(10);
      let plusElement = getRandomInterval(2, 5);
      for (let j = 1; j <= getRandomInterval(5, 10); j += 1) {
        startElement += plusElement;
        result.push(startElement);
      }
      let randomIndex = getRandomInt(5);
      hiddenElement = result[randomIndex];
      result[randomIndex] = '..';
      return result.join(' ');
    };

    console.log(`Question: ${progression()}`);
    const answerUser = readlineSync.question('Your answer: ');

    const checking = hiddenElement === +answerUser;

    if (checking === true) {
      console.log('Correct!');
    } else {
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${hiddenElement}'.\nLet's try again, ${userName}!`;
      return errorMessage;
    }
  }

  const result = `Congratulations, ${userName}!`;
  return result;
};

export default progressionGame;
