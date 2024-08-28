import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"

export const lolPlayers = [
  {
    playerName: "Ayu",
    playerImage: "../../../../../public/assets/image/lol-players/ayu.webp",
  },

  {
    playerName: "Jojo",
    playerImage: "../../../../../public/assets/image/lol-players/jojo.webp",
  },

  {
    playerName: "Tutsz",
    playerImage: "../../../../../public/assets/image/lol-players/tutsz.webp",
  },

  {
    playerName: "Wiz",
    playerImage: "../../../../../public/assets/image/lol-players/wiz.webp",
  },

  {
    playerName: "Zay",
    playerImage: "../../../../../public/assets/image/lol-players/zay.webp",
  },
  {
    playerName: "Zzk",
    playerImage: "../../../../../public/assets/image/lol-players/zzk.webp",
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
