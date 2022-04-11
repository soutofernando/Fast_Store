import React from 'react'
import Navbar from 'src/components/common/Navbar'
import FooterLogin from 'src/components/login/FooterLogin/FooterLogin'
import KeepConnected from 'src/components/login/KeepConnected/KeepConnected'
import LoginForm from 'src/components/login/LoginForm/LoginForm'
import LoginHeader from 'src/components/login/LoginHeader/LoginHeader'
import LoginInfo from 'src/components/login/LoginInfo/LoginInfo'
import LoginWith from 'src/components/login/LoginWith/LoginWith'
import PrivacyNotice from 'src/components/login/PrivacyNotice/PrivacyNotice'
import Section from 'src/components/sections/Section'


const login = () => {
  return (
    <Section>
      <Navbar />
      <div className="mr-6 ml-6 block mt-4 lg:flex lg:justify-around lg:mr-48 lg:ml-48">
        <div className='md:block md:w-1/2'>
          <div>
            <LoginHeader />
          </div>
          <div>
            <LoginForm />
          </div>
          <div>
            <KeepConnected />
          </div>
          <div>
            <PrivacyNotice />
          </div>
          <div>
            <LoginWith />
          </div>
        </div>
        <div className="lg:block lg:w-5/12">
          <div>
            <LoginInfo />
          </div>
        </div>
      </div>
      <div className="mb-10 mt-10">
        <FooterLogin />
      </div>

    </Section>
  )
}

export default login