import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginInput from '../Input/LoginInput'
import * as Yup from 'yup'
import axios from 'axios'
export default function ChangePassword({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  const [code, setCode] = useState('')

  const [error, setError] = useState('')
  const validatePassword = Yup.object({
    password: Yup.string()
      .required(
        'Enter a combination of at least six numbers,letters (such as ! and &).'
      )
      .min(6, 'Password must be atleast 6 characters.')
      .max(36, "Password can't be more than 36 characters"),

    confirmPassword: Yup.string()
      .required('Confirm your password.')
      .oneOf([Yup.ref('password')], 'Passwords must match.'),
  })
  return (
    <div className='bg-bg-primary max-w-[350px] md:w-96  rounded-lg relative'>
      <div className='font-medium px-4 py-4'>Change Password</div>
      <div className='border-b border-bg-secondary'></div>
      <div className='px-4 my-2'>
        <p>Pick a strong password .</p>
        <div className='my-4'>
          <Formik
            enableReinitialize
            validationSchema={validatePassword}
            initialValues={{ password, confirmPassword }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  name='password'
                  type='text'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password '
                />{' '}
                <LoginInput
                  name='confirmPassword'
                  type='text'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='Confirm Password'
                />
                {error && <div>{error}</div>}
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
