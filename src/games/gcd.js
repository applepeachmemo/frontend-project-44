import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';

const getGcd = (Item1, Item2) => {
  if (Item1 === 0 || Item2 === 0) {
    return Item1 + Item2;
  }
  if (Item1 > Item2) {
    return getGcd(Item1 - Item2, Item2);
  }
  return getGcd(Item1, Item2 - Item1);
};

const getRound = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getRound);
};
