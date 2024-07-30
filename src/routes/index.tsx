import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app-routes.tsx'

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
