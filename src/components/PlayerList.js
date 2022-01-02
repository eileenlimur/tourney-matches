import Player from './Player';

function PlayerList(props) {
  const { preparedPlayerData } = props;
  const parsedPlayers = preparedPlayerData.map(player => <Player {...player} key={player.gamerTag}/>)
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  )
}

export default PlayerList;