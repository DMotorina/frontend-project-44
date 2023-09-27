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

const isEven = (number) => number % 2 === 0;

const getNumberEvenAsToBool = (num) => (num ? 'yes' : 'no');

const getUserAnswerToBool = (userAnswer) => userAnswer.toLowerCase() === 'yes';

const playBrainEven = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num = createRandomNumber();

    printQuestion(`${num}`);

    const isNumberEven = isEven(num);
    const userAnswer = readlineSync.question('Your answer: ');

    if (getUserAnswerToBool(userAnswer) !== isNumberEven && !userAnswer) {
      ifAnswerIsEmpty(userName);
      return;
    }

    if (getUserAnswerToBool(userAnswer) !== isNumberEven) {
      printWrongAnswer(userAnswer, getNumberEvenAsToBool(isNumberEven), userName);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  printVictory(userName);
};

export default playBrainEven;
