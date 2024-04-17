import React from 'react'
import LanddingPage from './vendorDashboard/pages/LanddingPage'
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/main' element={<LanddingPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
