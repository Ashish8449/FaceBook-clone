import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import LoginInput from '../Input/LoginInput'

const loginInfos = {
  email: '',
  password: '',
}
export default function LoginForm() {
  const [login, setLogin] = useState(loginInfos)
  const { email, password } = login
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email address is required.')
      .email('Must be a valid email.')
      .max(100),
    password: Yup.string().required('Password is required'),
  })
  const handelChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }
  return (
    <Formik
      enableReinitialize
      initialValues={{
        email,
        password,
      }}
      validationSchema={loginValidation}
    >
      {(formik) => (
        <Form>
          <LoginInput
            placeholder='Email Address or Phone Number '
            type='text'
            name='email'
            onChange={handelChange}
          />{' '}
          <LoginInput
            placeholder='Password'
            type='password'
            name='password'
            onChange={handelChange}
            bottom={true}
          />
          <div className=''>
            <button type='submit ' className='blue_btn w-full '>
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
