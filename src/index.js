import readlineSync from 'readline-sync';

const gameFactory = (rules, startRound) => () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let roundCount = 0;

  while (roundCount < 3) {
    const [question, rightAnswer] = startRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    roundCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameFactory;
