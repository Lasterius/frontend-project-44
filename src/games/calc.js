import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('What is the result of the expression?');
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(20);
    const randomNumber2 = getRandomInt(20);
    const arrayOfRandomOperations = ['+', '-', '*'];
    const randomOperation = arrayOfRandomOperations[getRandomInt(3)];
    console.log(
      `Question: ${randomNumber} ${randomOperation} ${randomNumber2}`
    );
    const answerUser = readlineSync.question('Your answer: ');

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

    const checking = resultOperation === +answerUser;

    if (checking === true) {
      console.log('Correct!');
    } else {
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${resultOperation}'.\nLet's try again, ${userName}!`;
      return errorMessage;
    }
  }

  const result = `Congratulations, ${userName}!`;
  return result;
};

export default calcGame;
