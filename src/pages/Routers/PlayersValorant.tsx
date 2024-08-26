import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"

export const valorantPlayers = [
  {
    playerName: "Havoc",
    playerImage: "./src/assets/image/valorant-players/havoc.png",
  },

  {
    playerName: "Khalil",
    playerImage: "./src/assets/image/valorant-players/khalil.png",
  },

  {
    playerName: "Mwzera",
    playerImage: "./src/assets/image/valorant-players/mwzera.png",
  },

  {
    playerName: "NZR",
    playerImage: "./src/assets/image/valorant-players/nzr.png",
  },

  {
    playerName: "Xand",
    playerImage: "./src/assets/image/valorant-players/xand.png",
  },
]

export function PlayersValorant() {
  return (
    <PlayersCardStyled>
      {valorantPlayers.map((item, index) => (
        <PlayersCard
        key={index}
        playerName={item.playerName}
        playerImage={item.playerImage}
        />
      ))}
  </ PlayersCardStyled>

    
  )
}
