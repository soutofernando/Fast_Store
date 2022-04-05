import React from 'react'
import LoginInfo from 'src/components/login/LoginInfo/LoginInfo'
import RegisterButton from 'src/components/register/RegisterButton/RegisterButton'
import RegisterHeader from 'src/components/register/RegisterHeader/RegisterHeader'
import RegisterInput from 'src/components/register/RegisterInput/RegisterInput'
import RegisterPasswd from 'src/components/register/RegisterPasswd/RegisterPasswd'
import Section from 'src/components/sections/Section'

const register = () => {
    return (
        <Section>
            <div className='xl:flex justify-center mt-4 mr-48 ml-48'>
                <div className='block w-1/2'>
                    <div>
                        <RegisterHeader />
                    </div>
                    <div> 
                        <RegisterInput />
                    </div>
                    <div>
                        <RegisterPasswd />
                    </div>
                    <div className='mt-4'>
                        <RegisterButton />
                    </div>
                </div>
                <div className='w-5/12 ml-14'>
                    <LoginInfo />
                </div>
            </div>
        </Section>
    )
}

export default register