const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getGCD = (x, y) => (x % y === 0 ? y : getGCD(y, x % y));

const obj = { hiddenElement: 0 };

const getProgression = (startElement, progressionLength, progressionStep) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(startElement);
    startElement += progressionStep;
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

const getResultOfOperation = (operation, number, number2) => {
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
      String(result);
      result = 'Error. Use correct operator.';
      break;
  }
  return result;
};

const isEven = (number) => (number % 2 === 0 ? true : false);

export {
  getGCD, getRandomInteger, getProgression, obj, isPrime, getResultOfOperation, isEven,
};
