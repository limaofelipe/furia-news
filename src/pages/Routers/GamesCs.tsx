import { GameCard } from "../Home/components/GameCard"
import { RecentGamesLayout, Title } from "../Home/components/GameCard/styles"

export const teams = {
  furia: "../../../src/assets/furia.png",
  liquid: "../../../src/assets/teamliquid.png",
  vitality: "../../../src/assets/vitality.png",
  imperial: "../../../src/assets/imperial.png",
  heroic: "../../../src/assets/heroic.png",

}


export const gamesValorant = [
  { 
    date: "12 de Agosto de 2024",
    firstTeam: "Team Liquid",
    firstTeamLogo: teams.liquid,
    firstTeamPoints: 2,
    secondTeam: "Fúria Esports",
    secondTeamLogo: teams.furia,
    secondTeamPoints: 0,
  },

  { 
    date: "11 de Agosto de 2024",
    firstTeam: "Team Vitality",
    firstTeamLogo: teams.vitality,
    firstTeamPoints: 2,
    secondTeam: "Fúria Esports",
    secondTeamLogo: teams.furia,
    secondTeamPoints: 0,
  },

  { 
    date: "09 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 2,
    secondTeam: "Heroic",
    secondTeamLogo: teams.heroic,
    secondTeamPoints: 1,
  },

  { 
    date: "08 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 1,
    secondTeam: "Team Liquid",
    secondTeamLogo: teams.liquid,
    secondTeamPoints: 2,
  },

  { 
    date: "07 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: teams.furia,
    firstTeamPoints: 2,
    secondTeam: "Imperial Esports",
    secondTeamLogo: teams.imperial,
    secondTeamPoints: 1,
  }

]

export function GamesCs() {
  return (
    <RecentGamesLayout>
      <Title>
          Jogos Mais Recentes - Counter Strike
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