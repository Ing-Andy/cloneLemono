import React from 'react'
import './preblocForm.css'
import { useState } from 'react'
import Input from '../Input/Input'

export default function PreblocForm() {
    const [goToForm, setGoToForm] = useState<boolean>(false)
    const GoToForm = (): void => {
        setGoToForm(!goToForm)
    }
    const [name, setName] = useState<string>('')
  return (
    <div className='main' style={{justifyContent: goToForm ? 'center' : 'space-around'}}>
        <div className="Prebloc">
            <h3>WELCOME TO JFN</h3>
            <div className='PreblocText'>
                <Input id="Name" value={name} setValue={(e) => setName(e.target.value)} required={true}/>
            </div>
            <div className='PreblocCheckbox'>
                <label htmlFor="admin"><input type="checkbox" name="admin" id="admin" />avez vous un post administratif ?</label>
                <label htmlFor="edut"><input type="checkbox" name="edut" id="edut" />avez vous un post etudiantif ?</label>
                <label htmlFor="double"><input type="checkbox" name="double" id="double" />cummulez vous les deux ?</label>
            </div>
            <div className='PreblocButton'>
                <span>Si c'est fait ? clique <button type="submit" onClick={GoToForm}>ici</button></span>
            </div>
        </div>
    </div>
  )
}
