import runGameFactory from '../index.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';

const initText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = createRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
