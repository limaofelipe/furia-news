import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"

export const valorantPlayers = [
  {
    playerName: "Havoc",
    playerImage: "../../../../../public/assets/image/valorant-players/havoc.png",
  },

  {
    playerName: "Khalil",
    playerImage: "../../../../../public/assets/image/valorant-players/khalil.png",
  },

  {
    playerName: "Mwzera",
    playerImage: "../../../../../public/assets/image/valorant-players/mwzera.png",
  },

  {
    playerName: "NZR",
    playerImage: "../../../../../public/assets/image/valorant-players/nzr.png",
  },

  {
    playerName: "Xand",
    playerImage: "../../../../../public/assets/image/valorant-players/xand.png",
  },
]

export function PlayersValorant() {
  return (
    <PlayersCardStyled>
      <Title>
          Players - Valorant
      </Title>
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
