import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userActions } from '../Reducers/userReducer'
import Cookies from 'js-cookie'
import SearchAccount from '../components/Reset/SearchAccount'
import SendEmail from '../components/Reset/SendEmail'
import CodeVerification from '../components/Reset/CodeVerification'
import LoginFooter from '../components/Footer/LoginFooter'
import ChangePassword from '../components/Reset/ChangePassword'

export default function Reset({ user }) {
  console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [visibel, setVisibel] = useState(3)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const logOut = () => {
    dispatch(userActions.logOut())
    navigate('/login')
    Cookies.set('user', '')
  }
  return (
    <div className='bg-bg-secondary'>
      {/* header */}
      <div className='flex items-center shadow-lg h-14'>
        <div className=' mr-auto ml-4 h-12'>
          <img
            src='../../icons/facebook.svg'
            alt='facebookimg'
            className='h-full object-contain  m-auto md:m-0 '
          />
        </div>
        {!user ? (
          <Link to='/login'>
            <button className='bg-blue-color py-1 px-3 mr-8 rounded-md text-bg-primary font-medium '>
              Login
            </button>
          </Link>
        ) : (
          <div className='flex gap-3'>
            <Link to='/profile'>
              <img
                src={user?.picture}
                className='w-10 h-10 rounded-full'
                alt=''
              />
            </Link>{' '}
            <button
              className='bg-blue-color py-1 px-3 mr-8 rounded-md text-bg-primary font-medium '
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div className='flex justify-center items-center h-[90vh] '>
        {visibel === 0 && <SearchAccount />}
        {visibel === 1 && <SendEmail user={user} />}
        {visibel === 2 && <CodeVerification user={user} />}
        {visibel === 3 && (
          <ChangePassword
            user={user}
            password={password}
            confirmPassword={confirmPassword}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </div>
    </div>
  )
}
