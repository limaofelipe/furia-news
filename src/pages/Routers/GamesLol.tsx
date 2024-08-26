import { GameCard } from "../Home/components/GameCard"
import { RecentGamesLayout, Title } from "../Home/components/GameCard/styles"

export const teams = {
  fluxo: "../../../src/assets/fluxo.png",
  loud: "../../../src/assets/loud.png",
  furia: "../../../src/assets/furia.png",

}


export const gamesValorant = [
  { 
    date: "17 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 2,
    secondTeam: "Loud Esports",
    secondTeamLogo: teams.loud,
    secondTeamPoints: 3,
  },

  { 
    date: "10 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 3,
    secondTeam: "Fluxo Esports",
    secondTeamLogo: teams.fluxo,
    secondTeamPoints: 2,
  },

  { 
    date: "03 de Agosto de 2024",
    firstTeam: "Loud Esports",
    firstTeamLogo: teams.loud,
    firstTeamPoints: 3,
    secondTeam: "Furia Esports",
    secondTeamLogo: teams.furia,
    secondTeamPoints: 2,
  },

]

export function GamesLol() {
  return (
    <RecentGamesLayout>
      <Title>
        <h1>
          Jogos Mais Recentes - League of Legends
        </h1>
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