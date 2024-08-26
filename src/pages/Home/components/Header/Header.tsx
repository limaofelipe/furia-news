import { NavLink } from "react-router-dom"
import logo from "../../../../assets/furia.png"
import { HeaderStyled } from "./styles"

export function Header() {
  return (
    <HeaderStyled>
          <NavLink to={"/"}>
            <img src={logo} alt="Ilustração de uma pantera negra"/>
          </NavLink>
            <a className="button" href="https://furia.gg/" target="_blank">
              Site Oficial
            </a>
    </HeaderStyled>

  )
}