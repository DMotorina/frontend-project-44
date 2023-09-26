import readlineSync from 'readline-sync';

import {
  printWelcome,
  createRandomNumber,
  printQuestion,
  printWrongAnswer,
  printVictory,
  ifAnswerIsEmpty,
} from '../src/index.js';

printWelcome();

export const userName = readlineSync.question('May I have your name? ');

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const playBrainCalc = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = createRandomNumber();
    const num2 = createRandomNumber();

    const operator = operators[Math.floor(Math.random() * operators.length)];

    printQuestion(`${num1} ${operator} ${num2}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = operations[operator](num1, num2);

    if (Number(userAnswer) !== rightAnswer) {
      if (!userAnswer) {
        ifAnswerIsEmpty(userName);
        return;
      }

      printWrongAnswer(userAnswer, rightAnswer, userName);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  printVictory(userName);
};

export default playBrainCalc;
