import { Calendar, House, Newspaper, Users } from "@phosphor-icons/react";
import { Divider, ListLink, ListLinkGames, SidebarStyled } from "./styles";


export function Sidebar() {
  return (
    <SidebarStyled>
      <aside>
        <div>
          <ListLink>
            <a href="#">
              <House size={20}/>
              <h2>Página ínicial</h2>
            </a>
          </ListLink>

        </div>
        
          <Divider>
            <div></div>
          </Divider>

        <div>
          <ListLinkGames>
            <div>
              <h2>
                <img src="./src/assets/icons/ValorantLogo.svg"/>
                Valorant
              </h2>
              <ul>
                <a href="#">
                  <Newspaper size={20}/>
                  <li>Notícias</li>
                </a>
                <a href="#">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </a>
                <a href="#">
                  <Users size={20} />
                  <li>Players</li>
                </a>
              </ul>
            </div>

            <Divider>
              <div></div>
            </Divider>
            <div>
              <h2>
                <img src="./src/assets/icons/LolLogo.svg"/>
                Valorant
              </h2>
              <ul>
                <a href="#">
                <Newspaper size={20}/>
                  <li>Notícias</li>
                </a>
                <a href="#">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </a>
                <a href="#">
                  <Users size={20} />
                  <li>Players</li>
                </a>
              </ul>
            </div>

            <Divider>
              <div></div>
            </Divider>

            <div>
              <h2>
                <img src="./src/assets/icons/CsLogo.svg"/>
                Valorant
              </h2>
              <ul>
                <a href="#">
                  <Newspaper size={20}/>
                  <li>Notícias</li>
                </a>
                <a href="#">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </a>
                <a href="#">
                  <Users size={20} />
                  <li>Players</li>
                </a>
              </ul>
            </div>

          </ListLinkGames>

        </div>



   
      </aside>
    </SidebarStyled>
  )
}