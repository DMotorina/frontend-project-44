import playBrainEven, { userName } from '../games/game-even.js';
import { guardExpression } from '../src/index.js';

guardExpression(userName, 'Answer "yes" if the number is even, otherwise answer "no".', playBrainEven);
