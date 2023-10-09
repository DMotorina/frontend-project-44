import runGameFactory from '../index.js';
import createRandomIndex from '../utils/randomIndexGenerator.js';
import createRandomNumber from '../utils/randomNumberGenerator.js';

const initText = 'What number is missing in the progression?';

const createProgression = (number, length, step) => {
  const progression = [];
  let i = 0;

  while (i < length) {
    progression.push(number + (i * step));
    i += 1;
  }

  return progression;
};

const startRound = () => {
  const initialNumber = createRandomNumber(-10, 10);
  const step = createRandomNumber(1, 5);
  const progressionLength = createRandomNumber(5, 10);

  const progression = createProgression(initialNumber, progressionLength, step);
  const hiddenIndex = createRandomIndex(progression);
  const rightAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '...';

  return [`${progression.join(' ')}`, rightAnswer];
};

const runGame = runGameFactory(initText, startRound);

export default runGame;
