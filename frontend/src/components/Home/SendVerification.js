import React, { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../../constants'
export default function SendVerification({ user }) {
  const [sucess, setSucess] = useState()
  const [error, setError] = useState()
  const sendVerification = async () => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/sendVerification`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        }
      )
      setSucess(data.message)
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <div className='shadow-xl bg-bg-primary text-sm  md:px-8 px-4 py-6 rounded-md my-4'>
      Your account is not verified , verify your accountbefore it gets deleted
      after a month from creating{' '}
      <span
        className='text-blue-color hover:underline cursor-pointer'
        onClick={sendVerification}
      >
        click here{' '}
      </span>
      to resend verification link.
      {sucess && <div className='my-2 text-green-color'>{sucess}</div>}
      {error && <div className='my-2 text-error'>{error}</div>}
    </div>
  )
}
