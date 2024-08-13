import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { GameProgress } from '../pages/GameProgress'
import { RegisterGame } from '../pages/RegisterGame'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameprogress" element={<GameProgress />} />
      <Route path="/registerGame" element={<RegisterGame />} />
    </Routes>
  )
}
