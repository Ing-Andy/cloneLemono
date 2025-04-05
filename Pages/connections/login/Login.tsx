import React from 'react'
import { useState } from 'react'
import PreblocForm from '../../../Components/BlocLog/PreblocForm';
import BlocForm from '../../../Components/BlocLog/BlocForm';
import './login.css'

export default function Login() {
    const [isOkay, setIsOkay] = useState<boolean>(true);
    const handleClick = (): void => {
        setIsOkay(!isOkay);
    };
    const noop = () => {}
    const just = isOkay ? 'center' : 'space-around';
  return (
    <div className='containerLogin'>
        {isOkay ?
          (<div className='LoginYes' style={{display:'flex',justifyContent:`${just}`,alignItems:'center'}}>
            <PreblocForm handleClick={handleClick} disabled={!isOkay}/>
          </div>
          ) 
        : 
          (
            <div className='LoginYes' style={{display:'flex',justifyContent:`${just}`,alignItems:'center',width:'100%'}}>
              <PreblocForm handleClick={noop} disabled={!isOkay}/>
              <BlocForm Role='administratif'/>
            </div>
          )}
    </div>
  )
}
