import runGameFactory from '../index.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';
import createRandomIndex from '../utils/randomIndexGenerator.js';

const initText = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const keys = Object.keys(operations);

const startRound = () => {
  const randomNumber1 = createRandomNumber(1, 50);
  const randomNumber2 = createRandomNumber(1, 50);
  const index = createRandomIndex(keys);
  const key = keys[index];
  const quest = `${randomNumber1} ${key} ${randomNumber2}`;
  const rightAnswer = String(operations[key](randomNumber1, randomNumber2));

  return [quest, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
