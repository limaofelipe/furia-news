import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"

export const csPlayers = [
  {
    playerName: "Chelo",
    playerImage: "./src/assets/image/cs-players/chelo.png",
  },

  {
    playerName: "Fallen",
    playerImage: "./src/assets/image/cs-players/fallen.png",
  },

  {
    playerName: "Kscerato",
    playerImage: "./src/assets/image/cs-players/kscerato.png",
  },

  {
    playerName: "Skullz",
    playerImage: "./src/assets/image/cs-players/skullz.png",
  },

  {
    playerName: "Yuurih",
    playerImage: "./src/assets/image/cs-players/yuurih.png",
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
