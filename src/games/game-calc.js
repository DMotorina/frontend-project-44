import runGameFactory from '../index.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';

const initText = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const startRound = () => {
  const randomNumber1 = createRandomNumber(1, 50);
  const randomNumber2 = createRandomNumber(1, 50);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  const rightAnswer = String(operations[operator](randomNumber1, randomNumber2));

  return [question, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
