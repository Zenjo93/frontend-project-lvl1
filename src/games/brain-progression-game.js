import randomNumber from '../random.js';
import gameEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionData = () => {
  let progression = [];

  const start = randomNumber(1, 5);
  const diff = randomNumber(1, 5);
  const randomBlank = randomNumber(0, progressionLength - 1);

  for (let i = 0, el; progression.length <= progressionLength; el = start + diff * i, i += 1) {
    progression.push(el);
  }

  const result = progression[randomBlank];
  progression[randomBlank] = '..';
  const question = progression.join(' ');

  const gameData = [question, result.toString()];
  return gameData;
};

export default () => gameEngine(gameRule, getProgressionData);
