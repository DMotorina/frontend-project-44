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

const isPrime = (arr, num) => {
  const questionAboutLength = arr.length === 2 || arr.length === 1;
  const lastElement = arr[arr.length - 1];
  const firstElement = arr[0];

  return questionAboutLength && (lastElement === num) && (firstElement === 1) ? 'yes' : 'no';
};

const createArrWithDivisors = (num) => {
  const arrWithDivisors = [];
  let i = 1;

  while (i <= num) {
    if (Number.isInteger(num / i)) {
      arrWithDivisors.push(i);
    }

    i += 1;
  }

  return arrWithDivisors;
};

const playBrainPrime = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num = createRandomNumber();

    printQuestion(num);

    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isPrime(createArrWithDivisors(num), num);

    if (userAnswer !== rightAnswer) {
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

export default playBrainPrime;
