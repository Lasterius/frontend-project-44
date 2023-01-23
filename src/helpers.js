const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getGCD = (x, y) => (x % y === 0 ? y : getGCD(y, x % y));

const getProgression = (startElement, progressionLength, progressionStep) => {
  const result = [];
  let progressionTerm = startElement;
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(progressionTerm);
    progressionTerm += progressionStep;
  }
  return result;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const calculate = (operation, number, number2) => {
  let result = 0;
  switch (operation) {
    case '+':
      result += number + number2;
      break;
    case '-':
      result += number - number2;
      break;
    case '*':
      result += number * number2;
      break;
    default:
      throw new Error('Error. Use correct operator.');
  }
  return result;
};

const isEven = (number) => number % 2 === 0;

export {
  getGCD, getRandomInteger, getProgression, isPrime, calculate, isEven,
};
