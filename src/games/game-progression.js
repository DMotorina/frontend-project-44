import runGameFactory from '../index.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';

const initText = 'What number is missing in the progression?';

const createProgression = (firstElement, step) => {
  const progression = [];
  const length = createRandomNumber(5, 10);
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

  return resultProgression;
};

const getHiddenIndex = (arr) => createRandomNumber(2, arr.length);

const startRound = () => {
  const initialNumber = createRandomNumber(-10, 10);
  const step = createRandomNumber(1, 5);
  const arrayOfProgression = createProgression(initialNumber, step);
  const index = getHiddenIndex(arrayOfProgression);
  const progression = removeRandomNumberInProgression(arrayOfProgression, index);
  const question = `Question: ${progression.join(' ')}`;
  const rightAnswer = String(arrayOfProgression[index]);

  return [question, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
