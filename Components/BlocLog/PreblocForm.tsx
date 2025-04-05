import React from 'react'
import './preblocForm.css'
import { useState } from 'react'
import Input from '../Input/Input'


interface PreblocFormProps {
    disabled: boolean; // disabled est un boolean qui indique si le bouton est désactivé ou non 
    handleClick: () => void; // handleClick est une fonction sans argument qui ne retourne rien (void)
}
export default function PreblocForm({handleClick,disabled}: PreblocFormProps) {
    const [goToForm, setGoToForm] = useState<boolean>(false)
    const GoToForms = (): void => {
        handleClick()
    }
    const [name, setName] = useState<string>('')
  return (
    <div className='main' style={{justifyContent: goToForm ? 'center' : 'space-around'}}>
        <div className="Prebloc">
            <h3>WELCOME TO JFN</h3>
            <div className='PreblocText'>
                <Input id="Name" value={name} setValue={(e) => setName(e.target.value)} nom="Name" type="text" couleur="rgba(200, 155, 0, 1)" disable={disabled} required={true}/>
            </div>
            <div className='PreblocCheckbox'>
                <label htmlFor="admin"><input type="checkbox" name="admin" id="admin" disabled={disabled}/>avez vous un post administratif ?</label>
                <label htmlFor="edut"><input type="checkbox" name="edut" id="edut" disabled={disabled}/>avez vous un post etudiantif ?</label>
            </div>
            <div className='PreblocButton'>
                <span>Si c'est fait ? clique <button type="submit" onClick={GoToForms}>ici</button></span>
            </div>
        </div>
    </div>
  )
}
