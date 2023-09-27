import playBrainPrime, { userName } from '../games/game-prime.js';
import { guardExpression } from '../src/index.js';

guardExpression(userName, 'Answer "yes" if given number is prime. Otherwise answer "no".', playBrainPrime);
