import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Activate from './Pages/Activate'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Reset from './Pages/Reset'
import NotLogInRoutes from './routes/NotLogInRoutes'
import ProtectedRoutes from './routes/ProtectedRoutes'

export default function App() {
  const { user } = useSelector((state) => state?.user)
  console.log(user)
  return (
    <div className=''>
      <Routes>
        <Route exact path='/login' element={<Login />} />

        <Route exact path='/reset' element={<Reset user={user} />} />

        <Route element={<ProtectedRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='activate/:token' element={<Activate />} />
        </Route>
        <Route element={<NotLogInRoutes />}>
          <Route exact path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
