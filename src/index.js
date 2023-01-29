import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (condition, getData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = getData();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (rightAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
