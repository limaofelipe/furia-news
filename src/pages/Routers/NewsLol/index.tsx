import { news } from "../../Home";
import { Card } from "../../Home/components/Cards";
import { NewsLayout, NewsGrid } from "./styles";


export function filterNewsByTag(tag: any) {
  return news.filter(item => item.tag.toLowerCase() === tag.toLowerCase());
}

export function NewsLol() {
  const filteredNews = (filterNewsByTag("#lol").length > 0 ) ? filterNewsByTag("#lol") : news

  return (
    <NewsLayout>
    <h1>Time Fúria - League of Legends</h1>
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
  </NewsLayout>
  )
}