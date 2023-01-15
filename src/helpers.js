const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getGCD = (x, y) => (x % y === 0 ? y : getGCD(y, x % y));

let hiddenElement = 0;

const getProgression = () => {
  const result = [];
  let startElement = getRandomInteger(1, 10);
  const plusElement = getRandomInteger(2, 5);
  for (let j = 1; j <= getRandomInteger(5, 10); j += 1) {
    startElement += plusElement;
    result.push(startElement);
  }
  const randomIndex = getRandomInteger(0, 5);
  hiddenElement = result[randomIndex];
  result[randomIndex] = '..';
  return result.join(' ');
};

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

const getResultOperation = (resultOperation, randomNumber, randomNumber2) => {
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
    default:
      resultOperation = '1';
      break;
  }
};

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export { getGCD, getRandomInteger, getProgression, hiddenElement, isPrime, getResultOperation, isEven };
