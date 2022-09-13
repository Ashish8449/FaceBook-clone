import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import SnackBar from '../components/Comman/SnackBar'
import CreatePost from '../components/CreatePost/CreatePost'
import Header from '../components/Header/Header'
import HomeLeftMenu from '../components/Home/HomeLeftMenu'
import Right from '../components/Home/Right'
import Stories from '../components/Stories/Stories'
import axios from 'axios'
import { BACKEND_URL } from '../constants'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { userActions } from '../Reducers/userReducer'
import ActivationPopUp from '../components/Home/ActivationPopUp'
export default function Activate() {
  const { user } = useSelector((state) => state.user)
  const { token } = useParams()
  console.log(token)
  const [success, setSuccess] = useState('f') //Account Verification Sucessfully
  const [error, setError] = useState('') //Account Verification Failed
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    activate()
  }, [])
  const activate = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${BACKEND_URL}/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      setSuccess(data.message)

      Cookies.set('user', JSON.stringify({ ...user, verified: true }))
      dispatch(userActions.login({ ...user, verified: true }))
      setTimeout(() => {
        setLoading(false)
        navigate('/')
      }, 3000)
    } catch (error) {
    
      setError(error.response.data.message)
    }
  }

  return (
    <div className='mt-[56px]'>
      {success && (
        <ActivationPopUp
          type={'success'}
          loading={loading}
          text={success}
          header='Account Verification succeded'
        />
      )}
      {error && (
        <ActivationPopUp
          loading={loading}
          text={error}
          header='Account Verification failed'
        />
      )}

      <Header />
      <div className='flex bg-bg-forth min-h-screen'>
        <HomeLeftMenu user={user} />

        <div className=' flex-1 flex lg:justify-center md:px-4 px-3 '>
          <div className='md:max-w-[650px] w-full '>
            <Stories />
            <CreatePost user={user} />
          </div>
        </div>
        <Right user={user} />
      </div>
    </div>
  )
}
