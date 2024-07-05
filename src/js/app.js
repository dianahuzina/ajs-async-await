import GameSavingLoader from './js/GameSavingLoader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log(result);
  }
  catch(error) {
    console.log(error);
  }
})()