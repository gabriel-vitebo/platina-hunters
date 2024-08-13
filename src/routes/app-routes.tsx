import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { GameProgress } from '../pages/GameProgress'
import { RegisterGame } from '../pages/RegisterGame'
import { GameDetails } from '../pages/GameDetails'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameprogress" element={<GameProgress />} />
      <Route path="/registergame" element={<RegisterGame />} />
      <Route path="/gamedetails" element={<GameDetails />} />
    </Routes>
  )
}
