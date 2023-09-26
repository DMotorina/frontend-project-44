import playBrainCalc, { userName } from '../games/game-calc.js';
import { guardExpression } from '../src/index.js';

guardExpression(userName, 'What is the result of the expression?', playBrainCalc);
