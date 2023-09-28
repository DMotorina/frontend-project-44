import gameFactory from '../index.js';
import createRandomNumber from '../randomNumberGenerator.js';

const initText = 'What number is missing in the progression?';

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

  return resultProgression;
};

const getHiddenIndex = (arr) => Math.floor(Math.random() * arr.length);

const startRound = () => {
  const initialNumber = createRandomNumber();
  const step = createRandomNumber();
  const arrayOfProgression = createProgression(initialNumber, step);
  const index = getHiddenIndex(arrayOfProgression);
  const progression = removeRandomNumberInProgression(arrayOfProgression, index);
  const question = `Question: ${progression.join(' ')}`;
  const rightAnswer = String(arrayOfProgression[index]);

  return [question, rightAnswer];
};

const runGame = gameFactory(initText, startRound);

export default runGame;
