import randomNumber from '../random.js';
import gameEngine from '../index.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getBrainCalcData = () => {
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);

  const operator = operators[randomNumber(0, operators.length - 1)];

  let result;
  const question = `${num1} ${operator} ${num2}`;

  switch (operator) {
    default:
      return null;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
  }

  const gameData = [question, result.toString()];
  return gameData;
};

export default () => gameEngine(gameRule, getBrainCalcData);
