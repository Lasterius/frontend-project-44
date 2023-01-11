import readlineSync from 'readline-sync';

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(20);
    const randomNumber2 = getRandomInt(20);
    console.log(`Question: ${randomNumber} ${randomNumber2}`);
    const answerUser = readlineSync.question('Your answer: ');

    const gcd = (x, y) => {
      x = Math.abs(x);
      y = Math.abs(y);
      while (y) {
        let t = y;
        y = x % y;
        x = t;
      }
      return x;
    };

    const rightAnswer = gcd(randomNumber, randomNumber2);

    const checking = rightAnswer === +answerUser;

    if (checking === true) {
      console.log('Correct!');
    } else {
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
      return errorMessage;
    }
  }

  const result = `Congratulations, ${userName}!`;
  return result;
};

export default gcdGame;
