import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'

export default function App() {
  return (
    <div className=''>
      <Routes>
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}
