import randomNumber from '../random.js';
import gameEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getBrainEvenData = () => {
  const answer = randomNumber(1, 10);
  const result = isEven(answer) ? 'yes' : 'no';
  const gameData = [answer, result];
  return gameData;
};

export default () => gameEngine(gameRule, getBrainEvenData);
