import React from 'react'
import './Dashbord.css'
import Aside from '../../Components/Aside/AsideDashbord'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../Admin/AdminPage'

export default function Dashbord() {
  return (
    <div className='containerDashbord'>
        <aside className='AsideDashbord'>
            <Aside />
        </aside>
        <div className="containerApp">
            <Routes>
                <Route path='/administration' element={<AdminPage />} index/>
            </Routes>
        </div>
    </div>
  )
}
