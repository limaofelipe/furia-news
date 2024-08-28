interface CardProps{
  playerName: string,
  playerImage: string,
}

export function PlayersCard({playerName, playerImage}: CardProps) {
  return (
    <div>
      <img src={playerImage}/>
      <p>{playerName}</p>
    </div>
  )
  
};