import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Prebloc from '../Components/BlocLog/PreblocForm'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prebloc />} />
      </Routes>
    </BrowserRouter>
  )
}
