import gameFactory, { createRandomNumber } from '../index.js';

const initText = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => ((x !== 0 && y !== 0) ? findGcd(y, x % y) : x);

const startRound = () => {
  const randomNumber1 = createRandomNumber();
  const randomNumber2 = createRandomNumber();
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const rightAnswer = String(findGcd(randomNumber1, randomNumber2));

  return [question, rightAnswer];
};

const runGame = gameFactory(initText, startRound);

export default runGame;
