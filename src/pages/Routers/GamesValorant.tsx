import { GameCard } from "../Home/components/GameCard"
import { RecentGamesLayout, Title } from "../Home/components/GameCard/styles"
import furiaLogo from "../../assets/furia.png"
import leviatanLogo from "../../assets/leviatan.png"
import hundredtogo from "../../assets/hundredt.png"
import egLogo from "../../assets/eg.png"
import loudLogo from "../../assets/loud.png"
import mibrLogo from "../../assets/mibr.png"



export const teams = {
  leviatan: "../../../../../public/assets/leviatan.png",
  hundredt: "../../../../../public/assets/hundredt.png",
  eg: "../../../../../public/assets/eg.png",
  loud: "../../../../../public/assets/loud.png",
  mibr: "../../../../../public/assets/mibr.png",
  furia: "../../../../../public/assets/furia.png",

}


export const gamesValorant = [
  { 
    date: "13 de Julho de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 0,
    secondTeam: "Leviatan Esports",
    secondTeamLogo: leviatanLogo,
    secondTeamPoints: 1,
  },

  { 
    date: "7 de julho de 2024",
    firstTeam: "MIBR Esports",
    firstTeamLogo: mibrLogo,
    firstTeamPoints: 0,
    secondTeam: "Fúria Esports",
    secondTeamLogo: furiaLogo,
    secondTeamPoints: 2,
  },

  { 
    date: "2 de julho de 2024",
    firstTeam: "Loud Esports",
    firstTeamLogo: loudLogo,
    firstTeamPoints: 1,
    secondTeam: "Furia Esports",
    secondTeamLogo: furiaLogo,
    secondTeamPoints: 2,
  },

  { 
    date: "29 de junho de 2024",
    firstTeam: "Evil Geniuses",
    firstTeamLogo: egLogo,
    firstTeamPoints: 2,
    secondTeam: "Furia Esports",
    secondTeamLogo: furiaLogo,
    secondTeamPoints: 0,
  },

  { 
    date: "23 de junho de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 2,
    secondTeam: "100 Thieves",
    secondTeamLogo: hundredtogo,
    secondTeamPoints: 0,
  }

]

export function GamesValorant() {
  return (
    <RecentGamesLayout>
      <Title>
          Jogos Mais Recentes - Valorant
      </Title>
      {gamesValorant.map((item, index) => (
        <GameCard
          key={index}
          date={item.date}
          firstTeam={item.firstTeam}
          firstTeamLogo={item.firstTeamLogo}
          firstTeamPoints={item.firstTeamPoints}
          secondTeam={item.secondTeam}
          secondTeamLogo={item.secondTeamLogo}
          secondTeamPoints={item.secondTeamPoints}
        />
      ))}
 
    </RecentGamesLayout>
  )
}