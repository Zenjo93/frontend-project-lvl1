import readlineSync from 'readline-sync';

const turnsCount = 3;

export default (gameRule, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRule);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log('Hello, ' + userName + '!\n');

  for (let i = 0; i < turnsCount; i += 1) {
    const [question, result] = gameData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (result === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${result}'.\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
