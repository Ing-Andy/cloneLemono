import React from 'react'
import './input.css'

export default function Input({value,id,nom,required,setValue,type,couleur}) {
  return (
    <div className='Input'>
        <label htmlFor={id} style={{color:`${couleur}`}}> {nom} :</label>
        <input 
            type={type}
            id={id}
            placeholder={`Enter your ${id} here...`}
            required={required}
            value={value}
            onChange={setValue}
        />
    </div>
  )
}
