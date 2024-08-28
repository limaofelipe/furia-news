import { GameCard } from "../Home/components/GameCard"
import { RecentGamesLayout, Title } from "../Home/components/GameCard/styles"
import furiaLogo from "../../assets/furia.png"
import liquidLogo from "../../assets/teamliquid.png"
import vitalityLogo from "../../assets/vitality.png"
import imperialLogo from "../../assets/imperial.png"
import heroicLogo from "../../assets/heroic.png"


export const gamesValorant = [
  { 
    date: "12 de Agosto de 2024",
    firstTeam: "Team Liquid",
    firstTeamLogo: liquidLogo,
    firstTeamPoints: 2,
    secondTeam: "Fúria Esports",
    secondTeamLogo: furiaLogo,
    secondTeamPoints: 0,
  },

  { 
    date: "11 de Agosto de 2024",
    firstTeam: "Team Vitality",
    firstTeamLogo: vitalityLogo,
    firstTeamPoints: 2,
    secondTeam: "Fúria Esports",
    secondTeamLogo: furiaLogo,
    secondTeamPoints: 0,
  },

  { 
    date: "09 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 2,
    secondTeam: "Heroic",
    secondTeamLogo: heroicLogo,
    secondTeamPoints: 1,
  },

  { 
    date: "08 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 1,
    secondTeam: "Team Liquid",
    secondTeamLogo: liquidLogo,
    secondTeamPoints: 2,
  },

  { 
    date: "07 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 2,
    secondTeam: "Imperial Esports",
    secondTeamLogo: imperialLogo,
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