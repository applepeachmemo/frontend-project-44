export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
export const isEvenNumber = (number) => number % 2 === 0;