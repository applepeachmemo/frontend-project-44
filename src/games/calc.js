import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperationSymbol = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolsLength - 1);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

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
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);

  const question = `${number1} ${randomSymbol} ${number2}`;
  const correctAnswer = String(calculate(randomSymbol, number1, number2));

  return [question, correctAnswer];
};

export default () => {
  try {
    runGame(description, getRound);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};