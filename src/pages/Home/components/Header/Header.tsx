import { NavLink } from "react-router-dom";
import logo from "../../../../assets/furia.png";
import { HeaderStyled } from "./styles";
import { List, X } from "@phosphor-icons/react";
import { useState } from 'react';
import { ToggleMenuMobile } from "../MenuMobile";

export function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  if(window.innerWidth > 768 ) {
    return(
      <HeaderStyled>
        <NavLink to={"/"}>
          <img src={logo} alt="Ilustração de uma pantera negra"/>
        </NavLink>

        <a className="button" href="https://furia.gg/" target="_blank">
          Site Oficial
        </a>
      </HeaderStyled>
    );
  } else {
    return (
      <HeaderStyled>
        <div className="FirstLineHeader">
          <NavLink to={"/"}>
            <img src={logo} alt="Ilustração de uma pantera negra"/>
          </NavLink>
          <button onClick={toggleSidebar} className="ButtonMenu">
            {isSidebarVisible ? <X size={48} color="#A8B3CF"/> : <List size={48} color="#A8B3CF" />}
          </button>
        </div>

        {isSidebarVisible && 
            <ToggleMenuMobile  />
        }



      </HeaderStyled>
    );
  }
}
