import { Card } from "./components/NewsCards";
import { NewsGrid, NewsStyled } from "./styles";
import ValorantLogo from "../../assets/icons/ValorantLogo.svg"
import CsLogo from "../../assets/icons/CsLogo.svg"
import LolLogo from "../../assets/icons/LolLogo.svg"


export const news =  [
  {
    id: 1,
    icon: ValorantLogo,
    tag: "#valorant",
    title: "VALORANT: CEO da FURIA faz elogios ao time e dispara críticas ao calendário",
    caption: "Dirigente comentou sobre os panoramas nas redes sociais",
    ImageUrl: "https://cdn-62cb22a2c1ac1835ecef9f37.closte.com/wp-content/uploads/2024/07/imagem_2024-07-08_211329869.png",
    newsUrl: "https://www.pichauarena.com.br/valorant/ceo-furia-elogios-criticas/",
    
  },

  {
    id: 2,
    tag: "#lol",
    icon: LolLogo,
    title: "CBLOL 2024: FURIA pode fazer substituições no Top-side do time",
    caption: "League of Legendes",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2024/02/Na-foto-o-jungler-Stiner-800x450.jpg",
    newsUrl: "https://maisesports.com.br/cblol-2024-furia-pode-fazer-substituicoes-no-top-side-do-time/",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#valorant",
    icon: ValorantLogo,
    title: "VCT Americas 2024: xand assina com a FURIA para Etapa 2; Entenda",
    caption: "Com um desempenho abaixo do esperado na Etapa 1 do VCT Americas a FURIA já assinou o contrato de um dos novos reforços",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2024/04/furia-vct-americas-2024-800x450.jpg",
    newsUrl: "https://maisesports.com.br/vct-americas-2024-xand-assina-com-a-furia-para-etapa-2-entenda/",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#cs",
    title: "Sob FalleN, FURIA vence 54,8% dos jogos e vive pressão por resultados",
    caption: "Desde julho, time brasileiro de Counter-Strike conquistou dois títulos, só um deles importante, e sofreu derrotas duras, o que levou elenco a trocar de capitão",
    icon: CsLogo,
    ImageUrl: "https://s2-ge.glbimg.com/ubtfJ081p1ESmQ4MF_pEp9EqYno=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/j/9/vWr6s2TXyLBb8AXP9cvQ/53121238626-e8ba510b2c-k.jpg",
    newsUrl: "https://ge.globo.com/esports/cs/noticia/2023/12/10/cs2-sob-fallen-furia-vence-548percent-dos-jogos-e-vive-pressao-por-resultados.ghtml",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#lol",
    icon: LolLogo,
    title: "CBLOL 2024: FURIA anuncia sua line para o primeiro split",
    caption: "League of Legends",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2024/01/furia-lineup-cblol-2024-1-split.jpeg-800x450.jpg",
    newsUrl: "https://maisesports.com.br/cblol-2024-furia-anuncia-sua-line-para-o-primeiro-split/",
    className: "simpleNews"
  },
  {
    id: 3,
    tag: "#valorant",
    icon: ValorantLogo,
    title: "FURIA anuncia retorno de Nozwer para time de Valorant",
    caption: "Jogador argentino é contratado para substituir liazzi",
    ImageUrl: "https://s2-ge.glbimg.com/OA7-P2Qh8v4jrNQHaiTefzuVfGk=/0x0:2048x1581/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/z/s/OLYWpCQFAcQpdQqNkx8w/52327990897-4788901ac4-k.jpg",
    newsUrl: "https://ge.globo.com/esports/blogs/por-dentro-dos-esports/post/2024/03/26/furia-anuncia-retorno-de-nozwer-para-time-de-valorant.ghtml",
    className: "simpleNews"
  },
  {
    id: 3,
    tag: "#valorant",
    icon: ValorantLogo,
    title: "Xand retorna ao elenco da FURIA após dois anos fora da equipe",
    caption: "Volta lendária ",
    ImageUrl: "https://files.bo3.gg/uploads/image/46697/image/webp-e199929878a7b48a04f57ee106771bf6.webp",
    newsUrl: "https://bo3.gg/pt/valorant/news/legendary-comeback-xand-returns-to-furias-lineup-after-two-years-out-of-the-team",
    className: "simpleNews"
  },
  {
    id: 3,
    tag: "#valorant",
    icon: ValorantLogo,
    title: "FURIA renova com mwzera até 2026",
    caption: "Atleta está na organização desde 2023",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2023/03/mwzera-FURIA.jpg",
    newsUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2023/07/furia1-1-800x534.jpg",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#cs",
    icon: CsLogo,
    title: "FURIA desiste de LAN milionária na Índia",
    caption: "Equipe brasileira não disputará mais o torneio por conta do conflito de datas",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2023/07/furia1-1.jpg",
    newsUrl: "https://draft5.gg/noticia/furia-desiste-de-lan-milionaria-na-india",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#cs",
    icon: CsLogo,
    title: "CS2: FURIA disputará torneio de R$ 1 milhão na Finlândia",
    caption: "Campeonato será realizado em novembro e dezembro com oito times participantes",
    ImageUrl: "https://s2-ge.glbimg.com/wlBLrkxr9_afZmXOPjwCMb1X1xY=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/b/o/J8fA31RsaI7JIQqxayUA/53125365865-4ca51eb4fe-k.jpg",
    newsUrl: "https://ge.globo.com/esports/cs/noticia/2023/11/06/cs2-furia-disputara-torneio-de-r-1-milhao-na-finlandia.ghtml",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#cs",
    icon: CsLogo,
    title: "Pinnacle Cup V: FURIA volta a disputar uma decisão após mais de 1 ano",
    caption: "CS:GO",
    ImageUrl: "https://noticias.maisesports.com.br/wp-content/uploads/2023/08/fallen-guerri-800x533.jpg",
    newsUrl: "https://maisesports.com.br/pinnacle-cup-v-furia-volta-a-disputar-uma-decisao-apos-mais-de-1-ano/",
    className: "simpleNews"
  },
  {
    id: 3,
    tag: "#cs",
    icon: CsLogo,
    title: "CS:GO: FURIA lança documentário sobre PGL Major Stockholm",
    caption: "Após a contratação de Rafael 'saffee' na lineup de CS:GO, a FURIA lançou na última semana o documentário 'Do Brasil para o Mundo'",
    ImageUrl: "https://conteudo.imguol.com.br/c/entretenimento/5d/2022/01/10/csgo-furia-pgl-major-stockholm-2021-1641822447809_v2_900x506.png",
    newsUrl: "https://www.uol.com.br/start/ultimas-noticias/2022/01/10/csgo-furia-lanca-documentario-sobre-pgl-major-stockholm-assista.htm",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#lol",
    icon: LolLogo,
    title: "CBLOL 2024: assista ao vídeo de anúncio do elenco da FURIA",
    caption: "League of Legends",
    ImageUrl: "https://s04.video.glbimg.com/x240/12269247.jpg",
    newsUrl: "https://ge.globo.com/esports/video/cblol-2024-assista-ao-video-de-anuncio-do-elenco-da-furia-12269247.ghtml",
    className: "simpleNews"
  },
  {
    id: 3,
    tag: "#lol",
    icon: LolLogo,
    title: "CBLOL 2023: FURIA sobe na tabela; Los se mantém líder mesmo com derrota",
    caption: "Apenas FURIA e Fluxo venceram os dois jogos no fim de semana",
    ImageUrl: "https://s2-ge.glbimg.com/N6gjB3jFpCrHAH8mOZtCzwNUdf0=/0x0:799x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/4/1/Mv6NATSBiQ6FthOHQOWw/furia-2-.jpg",
    newsUrl: "https://ge.globo.com/esports/lol/noticia/2023/02/27/cblol-2023-furia-sobe-na-tabela-los-se-mantem-lider-mesmo-com-derrota.ghtml",
    className: "simpleNews"
  },

  {
    id: 3,
    tag: "#lol",
    icon: LolLogo,
    title: "FURIA elimina Fluxo do CBLOL e avança na lower",
    caption: "Disputa foi válida pela primeira rodada da chave inferior da competição",
    ImageUrl: "https://assets.gamearena.gg/wp-content/uploads/2024/08/09213708/53889731214_6b5484d818_k.jpg",
    newsUrl: "https://gamearena.gg/esports/lol/cblol-2024-jogos-furia-fluxo-lower1",
    className: "simpleNews"
  },



]

export function Home() {
  return (
    <NewsStyled>
      <h1>Tudo sobre a maior organização do Brasil </h1>
      <NewsGrid>
          {news.map((item, index) => (
            <Card
              key={index}
              tag={item.tag}
              icon={item.icon}
              title={item.title}
              caption={item.caption}
              imageUrl={item.ImageUrl}
              className={item.className}
              newsUrl={item.newsUrl}
            />
          ))}
      </NewsGrid>
    </NewsStyled>
  )
}