import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';
import './App.css';

function App() {
  const preparedPlayerData = addWinsToPlayers(preparePlayerData(playerData), matchData);
  
  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList preparedPlayerData={preparedPlayerData}/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
