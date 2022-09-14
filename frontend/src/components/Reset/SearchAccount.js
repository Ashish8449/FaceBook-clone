import React from 'react'
import { useState } from 'react'
import { Form, Formik } from 'formik'
import LoginInput from '../Input/LoginInput'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
export default function SearchAccount() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const validateEmail = Yup.object({
    email: Yup.string()
      .required('Email address ir required.')
      .email('Must be a valid email address.')
      .max(50, "Email address can't be more than 50 characters."),
  })
  return (
    <div className='bg-bg-primary max-w-[350px] md:w-96  rounded-lg relative'>
      <div className='font-medium px-4 py-4'>Find Your Account</div>
      <div className='border-b border-bg-secondary'></div>
      <div className='px-4 my-2'>
        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <div className='my-4'>
          <Formik
            enableReinitialize
            validationSchema={validateEmail}
            initialValues={{ email }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  name='email'
                  type='text'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email address or phone number'
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
                    Search
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
