import { NavLink } from "react-router-dom"
import logo from "../../../../assets/furia.png"
import { HeaderStyled } from "./styles"

export function Header() {
  return (
    <HeaderStyled>
          <NavLink to={"/"}>
            <img src={logo} alt="Ilustração de uma pantera negra"/>
          </NavLink>
          <input type="text" placeholder="Pesquise notícias da Fúria em seu jogo favorito"/>
            <a className="button" href="#">
              Contate a Fúria
            </a>
    </HeaderStyled>

  )
}