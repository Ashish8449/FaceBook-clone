import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import LoginInput from '../Input/LoginInput'
import axios from 'axios'
import { BACKEND_URL } from '../../constants'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { login as loginReducer } from '../../Reducers/userReducer'
const loginInfos = {
  email: '',
  password: '',
}
export default function LoginForm() {
  const [login, setLogin] = useState(loginInfos)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { email, password } = login
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email address is required.')
      .email('Must be a valid email.')
      .max(100),
    password: Yup.string().required('Password is required'),
  })

  const handelLoginSubmit = async () => {
    setLoading(false)
    setError('')
    try {
      const { data } = await axios.post(`${BACKEND_URL}/login`, {
        email,
        password,
      })
      console.log(data)
      dispatch(loginReducer(data))
      Cookies.set('user', JSON.stringify(data))
      navigate('/')
    } catch (error) {
      setLoading(false)
      console.log(error)
      // setError(error.response.data.message)
    }
  }
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
      onSubmit={() => {
        handelLoginSubmit()
      }}
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
              <ClipLoader
                color={'1876f2'}
                loading={loading}
                css={true}
                className='text-center'
                size={15}
              />{' '}
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
