import playBrainProgression, { userName } from '../games/game-progression.js';
import { guardExpression } from '../src/index.js';

guardExpression(userName, 'What number is missing in the progression?', playBrainProgression);
