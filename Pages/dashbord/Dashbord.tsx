import React from 'react'
import './Dashbord.css'
import Aside from '../../Components/Aside/AsideDashbord'

export default function Dashbord({children}) {
  return (
    <div className='containerDashbord'>
        <aside className='AsideDashbord'>
            <Aside />
        </aside>
        <div className="containerApp">
            {children}
        </div>
    </div>
  )
}
