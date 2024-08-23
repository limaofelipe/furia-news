import logo from "../../../../assets/logo.png"
import { HeaderStyled } from "./styles"

export function Header() {
  return (
    <HeaderStyled>
        <div>
          <img src={logo} alt="Ilustração de uma pantera negra"/>
          <input type="text" placeholder="Pesquise notícias da Fúria em seu jogo favorito"/>
            <a href="#">
              Contate a Fúria
            </a>
        </div>
    </HeaderStyled>

  )
}