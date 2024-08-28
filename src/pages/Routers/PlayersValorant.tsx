import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"
import havocImage from "../../assets/image/valorant-players/havoc.png"
import khalilImage from "../../assets/image/valorant-players/khalil.png"
import mwzeraImage from "../../assets/image/valorant-players/mwzera.png"
import nzrImage from "../../assets/image/valorant-players/nzr.png"
import xandImage from "../../assets/image/valorant-players/xand.png"

export const valorantPlayers = [
  {
    playerName: "Havoc",
    playerImage: havocImage,
  },

  {
    playerName: "Khalil",
    playerImage: khalilImage,
  },

  {
    playerName: "Mwzera",
    playerImage: mwzeraImage,
  },

  {
    playerName: "NZR",
    playerImage: nzrImage,
  },

  {
    playerName: "Xand",
    playerImage: xandImage,
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
