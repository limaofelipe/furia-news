import { ResultsLayout, GameResult, GamesPoints } from "./styles";



interface GameCardProps {
  date: string,
  firstTeam: String,
  firstTeamLogo: string,
  firstTeamPoints: number,
  secondTeam: string,
  secondTeamLogo: string,
  secondTeamPoints: number  
}
      
export function GameCard({date,
  firstTeam,
  firstTeamLogo,
  firstTeamPoints,
  secondTeam,
  secondTeamLogo,
  secondTeamPoints}: GameCardProps) {
  return (
      <ResultsLayout>
          <h3>{date}</h3>
        <GameResult>
          <div>
            <img src={firstTeamLogo}/>
            {firstTeam}
          </div>
          <GamesPoints>
            <p>{firstTeamPoints}</p>
            
            <p>{secondTeamPoints}</p>
          </GamesPoints>

          <div>
            {secondTeam}
            <img src={secondTeamLogo}/>
          </div>
        </GameResult>
      </ResultsLayout>
  )
}      
