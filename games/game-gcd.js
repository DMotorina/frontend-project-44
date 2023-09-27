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

const findGcd = (x, y) => {
  if (x !== 0 && y !== 0) {
    const z = x % y;
    return findGcd(y, z);
  }

  return x;
};

const playBrainGcd = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = createRandomNumber();
    const num2 = createRandomNumber();

    printQuestion(`${num1} ${num2}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = findGcd(num1, num2);

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

export default playBrainGcd;
