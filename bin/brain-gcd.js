import playBrainGcd, { userName } from '../games/game-gcd.js';
import { guardExpression } from '../src/index.js';

guardExpression(userName, 'Find the greatest common divisor of given numbers.', playBrainGcd);
