import randomNumber from '../random.js';
import gameEngine from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  } return true;
};

const getPrimeGameData = () => {
  const question = randomNumber(2, 500);
  const result = isPrime(question) ? 'yes' : 'no';

  const gameData = [question, result];
  return gameData;
};

export default () => gameEngine(gameRule, getPrimeGameData);
