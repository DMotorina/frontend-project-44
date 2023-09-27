export const guardExpression = (name, description, requiredFunction) => {
  if (name) {
    console.log(`Hello, ${name}!`);
    console.log(description);
    requiredFunction();
  } else {
    console.log('Please enter your name');
  }
};

export const createRandomNumber = () => Math.round(Math.random() * 10);

export const printWelcome = () => console.log('Welcome to the Brain Games!');

export const printQuestion = (data) => console.log(`Question: ${data}`);

export const printWrongAnswer = (userAnswer, rightAnswer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const printVictory = (name) => console.log(`Congratulations, ${name}!`);

export const ifAnswerIsEmpty = (name) => console.log(`You didn't write anything. Please write your answer, ${name}.`);
