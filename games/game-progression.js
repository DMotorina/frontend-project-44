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

const createProgression = (firstElement, step) => {
  const progression = [];
  const length = Math.floor(Math.random() * 6) + 5;
  let i = 0;

  while (i < length) {
    progression.push(firstElement + (i * step));
    i += 1;
  }

  return progression;
};

const removeRandomNumberInProgression = (progression, hiddenIndex) => {
  const resultProgression = [];

  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenIndex) {
      resultProgression.push('..');
    } else {
      resultProgression.push(progression[i]);
    }
  }

  return resultProgression.join(' ');
};

const getHiddenIndex = (arr) => Math.floor(Math.random() * arr.length);

const playBrainProgression = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const initialNumber = createRandomNumber();
    const step = createRandomNumber();

    const arrayOfProgression = createProgression(initialNumber, step);

    const index = getHiddenIndex(arrayOfProgression);

    const progression = removeRandomNumberInProgression(arrayOfProgression, index);

    printQuestion(progression);

    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = arrayOfProgression[index];

    if (Number(userAnswer) !== rightAnswer && !userAnswer) {
      ifAnswerIsEmpty(userName);
      return;
    }

    if (Number(userAnswer) !== rightAnswer) {
      printWrongAnswer(userAnswer, rightAnswer, userName);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  printVictory(userName);
};

export default playBrainProgression;
