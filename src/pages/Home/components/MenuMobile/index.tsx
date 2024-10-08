import { House, Newspaper, Calendar, Users } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { ToggleMenuMobileStyled, ListLink, Divider, ListLinkGames } from "./style";
import valorantLogo from "../../../../assets/icons/ValorantLogo.svg"
import LolLogo from "../../../../assets/icons/LolLogo.svg"
import CsLogo from "../../../../assets/icons/CsLogo.svg"
interface SidebarProps {
  closeSidebar: () => void;
}

export function ToggleMenuMobile({closeSidebar}: SidebarProps) {
  return (
    
    <ToggleMenuMobileStyled>
          <ListLink>
            <NavLink to="/">
              <House size={20}/>
              <h2>Página ínicial</h2>
            </NavLink>
          </ListLink>

        
          <Divider/>

          <ListLinkGames>
            <div>
              <h2>
                <img src={valorantLogo}/>
                Valorant
              </h2>
              <ul>
                <NavLink onClick={closeSidebar} to="/NewsValorant">
                  <Newspaper size={20}/>
                  <li>Notícias</li>
                </NavLink>
                <NavLink onClick={closeSidebar} to="/GamesValorant">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </NavLink>
                <NavLink onClick={closeSidebar} to="/PlayersValorant">
                  <Users size={20} />
                  <li>Players</li>
                </NavLink>
              </ul>
            </div>

            <Divider/>
            
            <div>
              <h2>
                <img src={LolLogo}/>
                League of Legends
              </h2>
              <ul>
                <NavLink onClick={closeSidebar} to="/NewsLol">
                <Newspaper size={20}/>
                  <li>Notícias</li>
                </NavLink>
                <NavLink onClick={closeSidebar} to="/GamesLol">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </NavLink>
                <NavLink onClick={closeSidebar} to="/PlayersLol">
                  <Users size={20} />
                  <li>Players</li>
                </NavLink>
              </ul>
            </div>

            <Divider />

            <div>
              <h2>
                <img src={CsLogo}/>
                Counter Strike
              </h2>
              <ul>
                <NavLink onClick={closeSidebar} to="/NewsCs">
                  <Newspaper size={20}/>
                  <li>Notícias</li>
                </NavLink>
                <NavLink onClick={closeSidebar} to="/GamesCs">
                  <Calendar size={20} />
                  <li>Jogos mais recenetes</li>
                </NavLink>
                <NavLink onClick={closeSidebar} to="/PlayersCs">
                  <Users size={20} />
                  <li>Players</li>
                </NavLink>
              </ul>
            </div>

            <footer>
              <p>As marcas e logotipos mencionados neste projeto são de propriedade de suas respectivas empresas. Todos os direitos reservados. O uso destas marcas neste projeto é apenas para fins ilustrativos e não implica em qualquer endosso ou parceria.</p>
            </footer>

          </ListLinkGames>

    </ToggleMenuMobileStyled>
  )
}