import { Outlet } from "react-router-dom";
import { LayoutContainer, LayoutFlex } from "./styles";
import { Header } from "../../pages/Home/components/Header/Header";
import { Sidebar } from "../../pages/Home/components/Sidebar";

export function DefaultLayout () {
  return (
    <LayoutContainer>
      <Header/>
      <LayoutFlex>
        <Sidebar/>
        <Outlet/>
      </LayoutFlex>
    </LayoutContainer>
  )
}