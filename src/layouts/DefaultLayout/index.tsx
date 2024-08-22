import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header/Header";


export function DefaultLayout () {
  return (
    <LayoutContainer>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </LayoutContainer>
  )
}