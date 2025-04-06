import React from 'react'
import './Bloc.css'
import { NavLink, Link } from 'react-router-dom'

interface BlocProps {
  titre : string,
  descript : string,
  image : string
}
export default function Bloc({titre,descript,image}) {
  return (
    <div className='Bloc'>
      <h3>{titre}</h3>
      <div className='Blocview'>
        <div className='descript'>{descript}</div>
        <div className='img'><img src={image} alt="" /></div>
      </div>
      <p>clique <Link to={titre} className='a'>ici</Link></p>
    </div>
  )
}
