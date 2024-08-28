import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"

export const lolPlayers = [
  {
    playerName: "Ayu",
    playerImage: "./src/assets/image/lol-players/ayu.webp",
  },

  {
    playerName: "Jojo",
    playerImage: "./src/assets/image/lol-players/jojo.webp",
  },

  {
    playerName: "Tutsz",
    playerImage: "./src/assets/image/lol-players/tutsz.webp",
  },

  {
    playerName: "Wiz",
    playerImage: "./src/assets/image/lol-players/wiz.webp",
  },

  {
    playerName: "Zay",
    playerImage: "./src/assets/image/lol-players/zay.webp",
  },
  {
    playerName: "Zzk",
    playerImage: "./src/assets/image/lol-players/zzk.webp",
  },
]

export function PlayersLol() {
  return (
    <PlayersCardStyled>
      <Title>
          Players - League of Legends
      </Title>
      {lolPlayers.map((item, index) => (
        <PlayersCard
        key={index}
        playerName={item.playerName}
        playerImage={item.playerImage}
        />
      ))}
  </ PlayersCardStyled>

    
  )
}
