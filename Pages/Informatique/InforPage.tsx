import React from 'react'
import './InfornPage.css'
import Bloc from '../../Components/Blocs/Bloc'

export default function InforPage() {
    const liste = [
        {titre:'relever',descript:'ldasdas sfnafhakh dakjnjsd ksfajknfad kfjd',image:'/picture/JfnLogo.jpeg'},
        {titre:'relever',descript:'ldasdas sfnafhakh dakjnjsd ksfajknfad kfjd',image:'/picture/JfnLogo.jpeg'},
        {titre:'relever',descript:'ldasdas sfnafhakh dakjnjsd ksfajknfad kfjd',image:'/picture/JfnLogo.jpeg'}
    ]
  return (
    <div className='InforPage'>
        <ul className="listeDashbord">
          {liste.map((el,index) => (
            <li key={index}><Bloc titre={el.titre} descript={el.descript} image={el.image}  /></li>
          ))}
        </ul>
    </div>
  )
}
