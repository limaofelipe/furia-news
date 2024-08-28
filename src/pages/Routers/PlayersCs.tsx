import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"
import cheloImage from "../../assets/image/cs-players/chelo.png"
import fallenImage from "../../assets/image/cs-players/fallen.png"
import ksceratoImage from "../../assets/image/cs-players/kscerato.png"
import skullzImage from "../../assets/image/cs-players/skullz.png"
import yuurihImage from "../../assets/image/cs-players/yuurih.png"


export const csPlayers = [
  {
    playerName: "Chelo",
    playerImage: cheloImage,
  },

  {
    playerName: "Fallen",
    playerImage: fallenImage,
  },

  {
    playerName: "Kscerato",
    playerImage: ksceratoImage,
  },

  {
    playerName: "Skullz",
    playerImage: skullzImage,
  },

  {
    playerName: "Yuurih",
    playerImage: yuurihImage,
  },
]

export function PlayersCs() {
  return (
    <PlayersCardStyled>
      <Title>
          Players - Counter Strike
      </Title>

      {csPlayers.map((item, index) => (
        <PlayersCard
        key={index}
        playerName={item.playerName}
        playerImage={item.playerImage}
        />
      ))}
      {/* </div> */}
  </ PlayersCardStyled>
  )
}
