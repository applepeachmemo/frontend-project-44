import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const currentValue = start + step * i;
    progression.push(currentValue);
  }

  return progression;
};

const getRound = () => {
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  const length = 10;

  const progression = getArithmeticProgression(start, step, length);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getRound);
};
