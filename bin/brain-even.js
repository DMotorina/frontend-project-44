import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');

const userName = readlineSync.question('May I have your name? ');

const randomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getUserAnswerToBool = (userAnswer, rightAnswer) => {
  let userAnswerToBool = false;

  if (userAnswer.toLowerCase() === 'yes') {
    userAnswerToBool = true;
  }

  return userAnswerToBool === rightAnswer;
};

const getNumberEvenAsToBool = (num) => (num ? 'yes' : 'no');

const playGame = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num = randomNumber();

    console.log(`Question: ${num}`);

    const isNumberEven = isEven(num);
    const userAnswer = readlineSync.question('Your answer: ');

    if (getUserAnswerToBool(userAnswer, isNumberEven)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getNumberEvenAsToBool(isNumberEven)}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

if (userName) {
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  playGame();
} else {
  console.log('Please enter your name');
}
