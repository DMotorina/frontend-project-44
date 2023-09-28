import gameFactory, { createRandomNumber } from '../index.js';

const initText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = createRandomNumber();
  const question = `Question: ${randomNumber}`;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const runGame = gameFactory(initText, startRound);

export default runGame;
