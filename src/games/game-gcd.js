import runGameFactory from '../index.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';

const initText = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (!y ? x : findGcd(y, x % y));

const startRound = () => {
  const randomNumber1 = createRandomNumber(1, 100);
  const randomNumber2 = createRandomNumber(1, 10);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const rightAnswer = String(findGcd(randomNumber1, randomNumber2));

  return [question, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
