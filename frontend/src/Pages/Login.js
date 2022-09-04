import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginFooter from '../components/Footer/LoginFooter'
import LoginForm from '../components/Form/LoginForm'
import RegisterForm from '../components/Form/RegisterForm'
import SimpleModal from '../components/Modal/SimpleModal'

export default function Login() {
  const [isCreate, setCreate] = useState(false)
  console.log(isCreate)
  return (
    <div className='max-w-[1440px] m-auto relative'>
      <div className='flex   min-h-[78vh] items-center justify-center bg-bg-third px-3'>
        <div className='md:w-4/5 m-auto md:flex items-center text-center'>
          <div className='md:mr-8 text-center md:text-left'>
            <img
              src='../../icons/facebook.svg'
              alt='facebookimg'
              className='w-80 m-auto md:m-0 '
            />
            <p className='text-primary text-xl md:text-3xl leading-relaxed  md:ml-5'>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          <div className='sm:w-[480px]  shadow-lg m-auto my-10 bg-bg-primary p-5 rounded-xl'>
            <LoginForm />
            <div className='divider-y divide-slate-300 mt-3'>
              <Link
                to='/reset'
                className='text-blue-color hover:underline block text-sm '
              >
                Forgotten password ?
              </Link>
              <div class='  border-solid border border-bg-third w-full h-[1px] my-3'></div>
              <button
                onClick={() => setCreate(true)}
                className='my-3 font-semibold text-lg bg-green-color w-64 h-10 rounded-md text-[#fff]'
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <SimpleModal isOpen={isCreate} onClose={setCreate}>
        <RegisterForm />
      </SimpleModal>

      {/* footer */}
      <LoginFooter />
    </div>
  )
}
