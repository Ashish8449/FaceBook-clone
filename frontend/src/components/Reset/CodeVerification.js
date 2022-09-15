import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginInput from '../Input/LoginInput'
import * as Yup from 'yup'
import axios from 'axios'
import { BACKEND_URL } from '../../constants'
export default function CodeVerification({
  userInfos,
  setVisibel,
  setUserInfos,
  ...props
}) {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const validateCode = Yup.object({
    code: Yup.string()
      .required('Code is required')
      .min('5', 'Code must be 5 characters.')
      .max('5', 'Code must be 5 characters.'),
  })
  const handelCodeSubmit = async () => {
    try {
      setError('')
      setLoading(true)
      await axios.post(`${BACKEND_URL}/validateResetCode`, {
        email: userInfos.email,
        code,
      })
      setError('')
      setLoading(false)
      setVisibel(3)
    } catch (error) {
      setLoading(true)
      setError(error.response.data.message)
    }
  }
  return (
    <div className='bg-bg-primary max-w-[350px] md:w-96  rounded-lg relative'>
      <div className='font-medium px-4 py-4'>Code verification</div>
      <div className='border-b border-bg-secondary'></div>
      <div className='px-4 my-2'>
        <p>Please enter code that been sent to your email.</p>
        <div className='my-4'>
          <Formik
            enableReinitialize
            initialValues={{ code }}
            validationSchema={validateCode}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  name='code'
                  type='text'
                  onChange={(e) => setCode(e.target.value)}
                  placeholder='code '
                />
                {error && (
                  <div className=' my-3 text-error text-center'>{error}</div>
                )}
                <div className='flex align-middle items-center gap-6'>
                  <Link
                    className='ml-auto bg-bg-secondary px-6 py-2 rounded-md text-secondary'
                    to='/login'
                  >
                    Cancel
                  </Link>
                  <button
                    type='submit'
                    className='bg-blue-color px-6 py-2 rounded-md text-bg-primary'
                    onClick={handelCodeSubmit}
                  >
                    Continue
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
