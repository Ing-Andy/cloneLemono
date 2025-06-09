import { ThemeProvider } from './Contexts/ThemeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Entreprise from './Pages/DashboardCandidat/Entreprise'
import YourProfile from './Pages/DashboardCandidat/YourProfile'
import CarouselHeader from './components/mine/CarouselHeader'

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} />  */}
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Dashboard />} >
            <Route index element={<YourProfile />} />
            <Route path='ent' element={<CarouselHeader />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
