import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  let hasWrongAnswer = false;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}`);
      hasWrongAnswer = true;
      break;
    }

    console.log('Correct!');
  }

  if (!hasWrongAnswer) {
    console.log(`Congratulations, ${playerName}`);
  }
};

export default runGame;
