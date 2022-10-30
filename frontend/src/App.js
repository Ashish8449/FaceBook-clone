import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CreatePostPopUp from './components/CreatePost/CreatePostPopUp'
import Activate from './Pages/Activate'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile/Profile'

import Reset from './Pages/Reset'
import NotLogInRoutes from './routes/NotLogInRoutes'
import ProtectedRoutes from './routes/ProtectedRoutes'

export default function App() {
  const { user } = useSelector((state) => state?.user)
  const [visibelCreatePost, setVisibelCreatePost] = useState(false)
  return (
    <div className=''>
      {user && visibelCreatePost && (
        <CreatePostPopUp
          user={user}
          setVisibelCreatePost={setVisibelCreatePost}
        />
      )}
      <Routes>
        <Route exact path='/login' element={<Login />} />

        <Route exact path='/reset' element={<Reset user={user} />} />

        <Route element={<ProtectedRoutes />}>
          <Route
            exact
            path='/'
            element={<Home setVisibelCreatePost={setVisibelCreatePost} />}
          />{' '}
          <Route
            exact
            path='/profile'
            element={<Profile setVisibelCreatePost={setVisibelCreatePost} />}
          />
          <Route
            exact
            path='/profile/:username'
            element={<Profile setVisibelCreatePost={setVisibelCreatePost} />}
          />
          <Route exact path='activate/:token' element={<Activate />} />
        </Route>
        <Route element={<NotLogInRoutes />}>
          <Route exact path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
