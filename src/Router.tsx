import { Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { NewsValorant } from "./pages/Routers/NewsValorant"
import { NewsLol } from "./pages/Routers/NewsLol"
import { NewsCs } from "./pages/Routers/NewsCs"
import { PlayersValorant } from "./pages/Routers/PlayersValorant"
import { PlayersCs } from "./pages/Routers/PlayersCs"
import { GamesLol } from "./pages/Routers/GamesLol"
import { GamesCs } from "./pages/Routers/GamesCs"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { PlayersLol } from "./pages/Routers/PlayersLol"
import { GamesValorant } from "./pages/Routers/GamesValorant"


export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/NewsValorant" element={<NewsValorant/>}/>
        <Route path="/NewsCs" element={<NewsCs/>}/>
        <Route path="/NewsLol" element={<NewsLol/>}/>
        
        <Route path="/PlayersValorant" element={<PlayersValorant/>}/>
        <Route path="/PlayersLol" element={<PlayersLol/>}/>
        <Route path="/PlayersCs" element={<PlayersCs/>}/>
        
        <Route path="/GamesLol" element={<GamesLol/>}/>
        <Route path="/GamesValorant" element={<GamesValorant/>}/>
        <Route path="/GamesCs" element={<GamesCs/>}/>
      </Route>
    </Routes>
  )
}