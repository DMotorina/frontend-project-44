import gameFactory from '../index.js';
import createRandomNumber from '../randomNumberGenerator.js';

const initText = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (!y ? x : findGcd(y, x % y));

const startRound = () => {
  const randomNumber1 = createRandomNumber();
  const randomNumber2 = createRandomNumber();
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const rightAnswer = String(findGcd(randomNumber1, randomNumber2));

  return [question, rightAnswer];
};

const runGame = gameFactory(initText, startRound);

export default runGame;
