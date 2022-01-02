import Match from './Match';

function MatchList(props) {
  const { matchData } = props;
  const parsedData = matchData.map(match => <Match {...match} key={match.matchNumber} />)
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedData}
    </section>
  )
}

export default MatchList;