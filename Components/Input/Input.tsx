import React from 'react'
import './input.css'

export default function Input({value,id,required,setValue}) {
  return (
    <div className='Input'>
        <label htmlFor={id}>{id}:</label>
        <input 
            type="text" 
            id={id}
            placeholder={`Enter your ${id} here...`}
            required={required}
            value={value}
            onChange={setValue}
        />
    </div>
  )
}
