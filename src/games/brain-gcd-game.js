import randomNumber from '../random.js';
import gameEngine from '../index.js';

const findGcd = (a, b) => (!b) ? a : findGcd(b, a % b);

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcdData = () => {
  let a = randomNumber(1, 100);
  let b = randomNumber(1, 100);

  const question = `${a} ${b}`;
  const result = findGcd(a, b);
  const gameData = [question, result.toString()];

  return gameData;
};

export default () => gameEngine(gameRule, getGcdData);