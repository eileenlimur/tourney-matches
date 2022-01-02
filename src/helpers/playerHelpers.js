export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerData, matchData) => {
  return playerData.map(player => {
    const points =  matchData.reduce(function(accumulator, match) {
      return match.winner === player.gamerTag ? accumulator + 1 : accumulator;
    }, 0)
    player.wins = points;
    return player;
  })
}

