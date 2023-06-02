import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperationSymbol = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolsLength);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

const calcArithmeticOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+': return firstValue + secondValue;
    case '-': return firstValue - secondValue;
    case '*': return firstValue * secondValue;
    default: return null;
  }
};

const getRound = () => {
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const firstNumber = getRandomNumber(0, 10);
  const secondNubmer = getRandomNumber(0, 10);

  const question = `${firstNumber} ${randomSymbol} ${secondNubmer}`;
  const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNubmer));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getRound);
};