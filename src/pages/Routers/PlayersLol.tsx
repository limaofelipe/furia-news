import { Title } from "../Home/components/GameCard/styles"
import { PlayersCard } from "../Home/components/PlayersCard"
import { PlayersCardStyled } from "../Home/components/PlayersCard/styles"
import ayuImage from "../../assets/image/lol-players/ayu.webp"
import jojoImage from "../../assets/image/lol-players/jojo.webp"
import tutszImage from "../../assets/image/lol-players/tutsz.webp"
import wizImage from "../../assets/image/lol-players/wiz.webp"
import zayImage from "../../assets/image/lol-players/zay.webp"
import zzkImage from "../../assets/image/lol-players/zzk.webp"


export const lolPlayers = [
  {
    playerName: "Ayu",
    playerImage: ayuImage,
  },

  {
    playerName: "Jojo",
    playerImage: jojoImage,
  },

  {
    playerName: "Tutsz",
    playerImage: tutszImage,
  },

  {
    playerName: "Wiz",
    playerImage: wizImage,
  },

  {
    playerName: "Zay",
    playerImage: zayImage,
  },
  {
    playerName: "Zzk",
    playerImage: zzkImage,
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
