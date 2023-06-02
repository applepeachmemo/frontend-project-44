import runGame from '../index.js';
import {
  getRandomNumber,
  isEven,
} from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getRound);
};