import { news } from "../Home";
import { Card } from "../Home/components/NewsCards";
import { NewsStyled, NewsGrid } from "../Home/styles";


export function filterNewsByTag(tag: any) {
  return news.filter(item => item.tag.toLowerCase() === tag.toLowerCase());
}

export function NewsValorant() {
  const filteredNews = (filterNewsByTag("#valorant").length > 0 ) ? filterNewsByTag("#valorant") : news

  return (
    <NewsStyled>
    <h1>Time Fúria - Valorant</h1>
    <NewsGrid>
    {filteredNews.map((item, index) => (
          <Card
            key={index}
            tag={item.tag}
            title={item.title}
            caption={item.caption}
            imageUrl={item.ImageUrl}
            className={item.className}
            newsUrl={item.newsUrl}
            icon={item.icon}/>
        ))}
    </NewsGrid>
  </NewsStyled>
  )
}