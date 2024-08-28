import { GameCard } from "../Home/components/GameCard"
import { RecentGamesLayout, Title } from "../Home/components/GameCard/styles"
import fluxoLogo from "../../assets/fluxo.png"
import loudLogo from "../../assets/loud.png"
import furiaLogo from "../../assets/furia.png"

export const gamesValorant = [
  { 
    date: "17 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 2,
    secondTeam: "Loud Esports",
    secondTeamLogo: loudLogo,
    secondTeamPoints: 3,
  },

  { 
    date: "10 de Agosto de 2024",
    firstTeam: "Fúria Esports",
    firstTeamLogo: furiaLogo,
    firstTeamPoints: 3,
    secondTeam: "Fluxo Esports",
    secondTeamLogo: fluxoLogo,
    secondTeamPoints: 2,
  },

  { 
    date: "03 de Agosto de 2024",
    firstTeam: "Loud Esports",
    firstTeamLogo: loudLogo,
    firstTeamPoints: 3,
    secondTeam: "Furia Esports",
    secondTeamLogo: furiaLogo,
    secondTeamPoints: 2,
  },

]

export function GamesLol() {
  return (
    <RecentGamesLayout>
      <Title>
          Jogos Mais Recentes - League of Legends
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