import { news } from "../Home";
import { Card } from "../Home/components/NewsCards";
import { NewsStyled, NewsGrid } from "../Home/styles";


export function filterNewsByTag(tag: any) {
  return news.filter(item => item.tag.toLowerCase() === tag.toLowerCase());
}

export function NewsCs() {
  const filteredNews = (filterNewsByTag("#cs").length > 0 ) ? filterNewsByTag("#cs") : news

  return (
    <NewsStyled>
      <h1>Time Fúria - Counter Strike</h1>
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