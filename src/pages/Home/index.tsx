import { Card } from "./components/Cards";
import { HomeStyled, NewsGrid } from "./styles";


const news =  [
  {
    id: 1,
    title: "FURIA renova com mwzera até 2026",
    caption: "Atleta está na organização desde 2023",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2023/03/mwzera-FURIA.jpg"
  },

  {
    id: 1,
    title: "FURIA renova com mwzera até 2026",
    caption: "Atleta está na organização desde 2023",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2023/03/mwzera-FURIA.jpg"
  },


]


export function Home() {
  return (
    <HomeStyled>
      <h1>Tudo sobre a maior organização do Brasil </h1>
      <NewsGrid>
          {news.map((item, index) => (
              <Card key={index} title={item.title} caption={item.caption} imageUrl={item.ImageUrl}  />
          ))}
      </NewsGrid>
    </HomeStyled>
  )
}