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
  const Number1 = getRandomNumber(0, 10);
  const Nubmer2 = getRandomNumber(0, 10);

  const question = `${Number1} ${randomSymbol} ${Nubmer2}`;
  const correctAnswer = String(calcArithmeticOperation(randomSymbol, Number1, Nubmer2));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getRound);
};