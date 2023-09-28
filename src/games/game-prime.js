import gameFactory, { createRandomNumber } from '../index.js';

const initText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (arr, num) => {
  const questionAboutLength = arr.length === 2 || arr.length === 1;
  const lastElement = arr[arr.length - 1];
  const firstElement = arr[0];

  return questionAboutLength && (lastElement === num) && (firstElement === 1) ? 'yes' : 'no';
};

const createArrWithDivisors = (num) => {
  const arrWithDivisors = [];
  let i = 1;

  while (i <= num) {
    if (Number.isInteger(num / i)) {
      arrWithDivisors.push(i);
    }

    i += 1;
  }

  return arrWithDivisors;
};

const startRound = () => {
  const randomNumber = createRandomNumber();
  const rightAnswer = isPrime(createArrWithDivisors(randomNumber), randomNumber);
  const question = `Question: ${randomNumber}`;
  return [question, rightAnswer];
};

const runGame = gameFactory(initText, startRound);

export default runGame;
