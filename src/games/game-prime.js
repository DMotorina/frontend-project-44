import runGameFactory from '../index.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';

const initText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const startRound = () => {
  const randomNumber = createRandomNumber(-50, 100);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [`${randomNumber}`, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
