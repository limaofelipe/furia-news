import { GameCard } from "../Home/components/GameCard"
import { RecentGamesLayout, Title } from "../Home/components/GameCard/styles"

export const teams = {
  leviatan: "../../../src/assets/leviatan.png",
  hundredt: "../../../src/assets/hundredt.png",
  eg: "../../../src/assets/eg.png",
  loud: "../../../src/assets/loud.png",
  mibr: "../../../src/assets/mibr.png",
  furia: "../../../src/assets/furia.png",

}


export const gamesValorant = [
  { 
    date: "13 de Julho de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 0,
    secondTeam: "Leviatan Esports",
    secondTeamLogo: teams.leviatan,
    secondTeamPoints: 1,
  },

  { 
    date: "7 de julho de 2024",
    firstTeam: "MIBR Esports",
    firstTeamLogo: teams.mibr,
    firstTeamPoints: 0,
    secondTeam: "Fúria Esports",
    secondTeamLogo: teams.furia,
    secondTeamPoints: 2,
  },

  { 
    date: "2 de julho de 2024",
    firstTeam: "Loud Esports",
    firstTeamLogo: teams.loud,
    firstTeamPoints: 1,
    secondTeam: "Furia Esports",
    secondTeamLogo: teams.furia,
    secondTeamPoints: 2,
  },

  { 
    date: "29 de junho de 2024",
    firstTeam: "Evil Geniuses",
    firstTeamLogo: teams.eg,
    firstTeamPoints: 2,
    secondTeam: "Furia Esports",
    secondTeamLogo: teams.furia,
    secondTeamPoints: 0,
  },

  { 
    date: "23 de junho de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 2,
    secondTeam: "Leviatan Esports",
    secondTeamLogo: teams.leviatan,
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