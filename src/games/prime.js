import readlineSync from 'readline-sync';

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getRandomInterval = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInterval(2, 20);
    console.log(`Question: ${randomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');

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

    let rightAnswer = isPrime(randomNumber);

    const checking1 = rightAnswer === 'prime' && answerUser === 'yes';
    const checking2 = rightAnswer === 'composite' && answerUser === 'no';

    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else {
      const opposite = answerUser === 'yes' ? 'no' : 'yes';
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`;
      return errorMessage;
    }
  }

  const result = `Congratulations, ${userName}!`;
  return result;
};

export default primeGame;
