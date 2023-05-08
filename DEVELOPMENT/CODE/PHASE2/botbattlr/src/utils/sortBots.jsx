export function sortBots(bots, sortCriteria) {
    return [...bots].sort((botA, botB) => {
      if (botA[sortCriteria] > botB[sortCriteria]) {
        return -1;
      } else if (botA[sortCriteria] < botB[sortCriteria]) {
        return 1;
      } else {
        return 0;
      }
    });
  }