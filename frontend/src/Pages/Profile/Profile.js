import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../Actions/Profile'
import Header from '../../components/Header/Header'
import Cover from './Cover'
export default function Profile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const { username } = useParams()
  const { user } = useSelector((state) => state.user)
  const profile = useSelector((state) => state.profile)
  let userName = username ? username : user.username

  useEffect(() => {
    dispatch(getProfile(user.token, userName))
  }, [])

  return (
    <>
      <Header page='profile' />
      {profile.user && <Cover userProfile={profile.user} />}
    </>
  )
}
