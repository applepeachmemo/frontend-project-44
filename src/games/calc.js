import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculate = (symbol, x, y) => {
  switch (symbol) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unsupported operation: ${symbol}`);
  }
};

const getRound = () => {
  const symbol = operationSymbols[getRandomNumber(0, operationSymbols.length - 1)];
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);

  const question = `${number1} ${symbol} ${number2}`;
  const correctAnswer = String(calculate(symbol, number1, number2));

  return [question, correctAnswer];
};

runGame(description, getRound);
