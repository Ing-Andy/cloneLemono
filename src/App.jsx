import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Prebloc from '../Components/BlocLog/PreblocForm'
import BlocForm from '../Components/BlocLog/BlocForm'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Prebloc />} /> */}
        <Route path="/" element={<BlocForm />} />
      </Routes>
    </BrowserRouter>
  )
}
