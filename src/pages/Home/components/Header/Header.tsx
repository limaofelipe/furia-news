import { NavLink } from "react-router-dom";
import logo from "../../../../assets/furia.png"
import { HeaderStyled } from "./styles";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from 'react';
import { ToggleMenuMobile } from "../MenuMobile";

export function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize)
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  }

  return (
    <div>
    {isMobile ? (
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
          <ToggleMenuMobile  closeSidebar={closeSidebar}/>
      }



    </HeaderStyled>
    ) : (
      <HeaderStyled>
      <NavLink to={"/"}>
        <img src={logo} alt="Ilustração de uma pantera negra"/>
      </NavLink>

      <a className="button" href="https://furia.gg/" target="_blank">
        Site Oficial
      </a>
    </HeaderStyled>
    )}
    </div>
  )



}
