import './App.css'
import React from 'react'
import AdminPage from '../Pages/Admin/AdminPage'
import Dashbord from '../Pages/dashbord/Dashbord'
import Login from '../Pages/connections/login/Login'
import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavLink to='/login'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashbord />}>
          <Route path='administration' element={<AdminPage />} />
          <Route path='/' element={<NavLink to='/administration' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
