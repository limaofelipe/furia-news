import { Calendar, House, Newspaper, Users } from "@phosphor-icons/react";
import { Divider, ListLink, ListLinkGames, SidebarStyled } from "./styles";
import { NavLink } from "react-router-dom";



export function Sidebar() {
  return (
    <SidebarStyled>
          <ListLink>
            <NavLink to="/">
              <House size={20}/>
              <h2>Página ínicial</h2>
            </NavLink>
          </ListLink>

        
          <Divider/>

        <div>
          <ListLinkGames>
            <div>
              <h2>
                <img src="./src/assets/icons/ValorantLogo.svg"/>
                Valorant
              </h2>
              <ul>
                <NavLink to="/NewsValorant">
                  <Newspaper size={20}/>
                  <li>Notícias</li>
                </NavLink>
                <NavLink to="/GamesValorant">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </NavLink>
                <NavLink to="/PlayersValorant">
                  <Users size={20} />
                  <li>Players</li>
                </NavLink>
              </ul>
            </div>

            <Divider/>
            
            <div>
              <h2>
                <img src="./src/assets/icons/LolLogo.svg"/>
                League of Legends
              </h2>
              <ul>
                <NavLink to="/NewsLol">
                <Newspaper size={20}/>
                  <li>Notícias</li>
                </NavLink>
                <NavLink to="/GamesLol">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </NavLink>
                <NavLink to="/PlayersLol">
                  <Users size={20} />
                  <li>Players</li>
                </NavLink>
              </ul>
            </div>

            <Divider />

            <div>
              <h2>
                <img src="./src/assets/icons/CsLogo.svg"/>
                Counter Strike
              </h2>
              <ul>
                <NavLink to="/NewsCs">
                  <Newspaper size={20}/>
                  <li>Notícias</li>
                </NavLink>
                <NavLink to="/GamesCs">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </NavLink>
                <NavLink to="/PlayersCs">
                  <Users size={20} />
                  <li>Players</li>
                </NavLink>
              </ul>
            </div>

            <footer>
              <p>As marcas e logotipos mencionados neste projeto são de propriedade de suas respectivas empresas. Todos os direitos reservados. O uso destas marcas neste projeto é apenas para fins ilustrativos e não implica em qualquer endosso ou parceria.</p>
            </footer>

          </ListLinkGames>

        </div>
    </SidebarStyled>
  )
}