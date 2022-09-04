import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import RegisterInput from '../Input/RegisterInput'
import * as Yup from 'yup'
import DateOfBirthSelector from '../DateOfBirthSelector'
import GenderSelector from '../GenderSelector'
import ClipLoader from 'react-spinners/ClipLoader'
import axios from 'axios'
const userInfos = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: '',
}

export default function RegisterForm() {
  const [user, setUser] = useState(userInfos)
  const [dateError, setDateError] = useState('')
  const [genderError, setGenderError] = useState('')

  const [error, setError] = useState('error')
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState('')

  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user
  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("What's your First name ?")
      .min(2, 'Fisrt name must be between 2 and 16 characters.')
      .max(16, 'Fisrt name must be between 2 and 16 characters.')
      .matches(/^[aA-zZ]+$/, 'Numbers and special characters are not allowed.'),
    last_name: Yup.string()
      .required("What's your Last name ?")
      .min(2, 'Last name must be between 2 and 16 characters.')
      .max(16, 'Last name must be between 2 and 16 characters.')
      .matches(/^[aA-zZ]+$/, 'Numbers and special characters are not allowed.'),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email('Enter a valid email address.'),
    password: Yup.string()
      .required(
        'Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &).'
      )
      .min(6, 'Password must be atleast 6 characters.')
      .max(36, "Password can't be more than 36 characters"),
  })
  const handelRegisterChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handelRegisterSubmit = async () => {
    console.log(process.env)
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }
      )

      setError('')
      setSuccess(data.message)
    } catch (error) {
      setLoading(false)
      setError(error.response.data.message)
    }
  }

  const handelSubmitForm = () => {
    let currentDate = new Date()
    let pickDate = new Date(bYear, bMonth - 1, bDay)
    let atLeast14 = new Date(1970 + 14, 0, 1)
    let noMoreThan70 = new Date(1970 + 70, 0, 1)
    if (currentDate - pickDate < atLeast14) {
      //  you are less than 14 years

      setDateError(
        'it looks like you(ve enetered the wrong info.Please make sure that you use your real date of birth.'
      )
    } else if (currentDate - pickDate > noMoreThan70) {
      //  you are more than 70
      setDateError(
        'it looks like you(ve enetered the wrong info.Please make sure that you use your real date of birth.'
      )
    } else if (gender === '') {
      setGenderError(
        'Please choose a gender. You can change who can see this later.'
      )
    } else {
      setDateError('')
      setGenderError('')
      handelRegisterSubmit()
    }
  }
  return (
    <div className=''>
      <div className='border-b border-bg-third'>
        <div className='font-bold text-3xl'>Sign Up</div>
        <p className='text-secondary my-2 text-sm'>it's quick and easy</p>
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }}
        validationSchema={registerValidation}
        onSubmit={handelSubmitForm}
      >
        {(formik) => (
          <Form className='my-3'>
            <div className='md:flex '>
              <div className='md:mr-2'>
                <RegisterInput
                  type='text'
                  placeholder='First Name'
                  name='first_name'
                  onChange={handelRegisterChange}
                />{' '}
              </div>
              <div className='relative'>
                <RegisterInput
                  type='text'
                  placeholder='Last Name'
                  name='last_name'
                  left={true}
                  onChange={handelRegisterChange}
                />
              </div>
            </div>
            <div className=''>
              <RegisterInput
                type='text'
                placeholder='Email'
                name='email'
                onChange={handelRegisterChange}
              />
            </div>{' '}
            <div className=''>
              <RegisterInput
                type='password'
                placeholder='New Password'
                name='password'
                onChange={handelRegisterChange}
              />
            </div>{' '}
            <DateOfBirthSelector
              bDay={bDay}
              bMonth={bMonth}
              bYear={bYear}
              handelRegisterChange={handelRegisterChange}
              dateError={dateError}
            />
            <GenderSelector
              handelRegisterChange={handelRegisterChange}
              genderError={genderError}
            />
            <div className='text-xs'>
              By clicking Sign Up, you agree to our{' '}
              <span className='text-blue-color'> Terms, Data Policy</span> and
              <span className='text-blue-color'> Cookie Policy.</span> You may
              receive SMS notifications from us and can opt out at any time.
            </div>
            <div className='flex justify-center'>
              <button className='my-3 font-semibold text-lg bg-green-color w-64 h-10 rounded-md text-[#fff]'>
                Sing UP ClipL
              </button>
            </div>
            <ClipLoader
              color={'1876f2'}
              loading={loading}
              css={true}
              className='text-center'
              size={15}
            />
            {success && (
              <div className='text-green-color text-center'>{success}</div>
            )}
            {error && <div className='text-error text-center'>{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  )
}
