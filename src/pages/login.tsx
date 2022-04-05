import React from 'react'
import FooterLogin from 'src/components/login/FooterLogin/FooterLogin'
import KeepConnected from 'src/components/login/KeepConnected/KeepConnected'
import LoginButton from 'src/components/login/LoginButton/LoginButton'
import LoginHeader from 'src/components/login/LoginHeader/LoginHeader'
import LoginInfo from 'src/components/login/LoginInfo/LoginInfo'
import LoginEmail from 'src/components/login/LoginInput/LoginEmail'
import LoginPasswd from 'src/components/login/LoginPasswd/LoginPasswd'
import LoginWith from 'src/components/login/LoginWith/LoginWith'
import PrivacyNotice from 'src/components/login/PrivacyNotice/PrivacyNotice'
import Section from 'src/components/sections/Section'


const login = () => {
  return (
    <Section>
      <div className="xl:flex justify-around mt-4 mr-48 ml-48">
        <div className='block w-1/2'>
          <div>
            <LoginHeader />
          </div>
          <div>
            <LoginEmail />
          </div>
          <div>
            <LoginPasswd />
          </div>
          <div>
            <KeepConnected />
          </div>
          <div>
            <LoginButton />
          </div>
          <div>
            <PrivacyNotice />
          </div>
          <div>
            <LoginWith />
          </div>
        </div>
        <div className="block w-5/12">
          <div>
            <LoginInfo />
          </div>
        </div>
      </div>

      <FooterLogin />

    </Section>
  )
}

export default login