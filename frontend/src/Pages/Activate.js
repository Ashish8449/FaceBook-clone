import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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
export default function Activate() {
  const { user } = useSelector((state) => state)
  const { token } = useParams()

  const [success, setSuccess] = useState('') //Account Verification Sucessfully
  const [error, setError] = useState('') //Account Verification Failed
  const [loading, setLoading] = useState('')
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
      console.log(data)
      setSuccess(data.message)
      Cookies.set('user', JSON.stringify({ ...user, verified: true }))
      dispatch(userActions.login({ ...user, verified: true }))
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='mt-[56px]'>
      <Header />
      {success && <SnackBar text={success} onClose={() => setSuccess('')} />}
      {error && (
        <SnackBar text={error} isSucess={true} onClose={() => setError('')} />
      )}
      <div className='flex'>
        <HomeLeftMenu user={user} />
        {/* middel div */}
        <div className='ml-[30vw] flex-1 mr-[370px] '>
          <Stories />
          <CreatePost user={user} />
        </div>
        <Right user={user} />
      </div>
    </div>
  )
}
