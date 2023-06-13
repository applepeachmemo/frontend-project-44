import runGame from '../index.js';
import {
  getRandomNumber,
  isEven,
} from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getRound);
};
