import React from 'react'
import LoginInfo from 'src/components/login/LoginInfo/LoginInfo'
import RegisterForm from 'src/components/register/RegisterForm/RegisterForm'
import RegisterHeader from 'src/components/register/RegisterHeader/RegisterHeader'
import Section from 'src/components/sections/Section'




const register = () => {

    return (
        <Section>
            <div className='block ml-6 mr-6 mt-4 lg:flex lg:justify-center lg:mr-48 lg:ml-48'>
                <div className='lg:block lg:w-1/2'>
                    <div>
                        <RegisterHeader />
                    </div>
                    <div>
                        <RegisterForm />
                    </div>
                </div>
                <div className='lg:w-5/12 lg:ml-14'>
                    <LoginInfo />
                </div>
            </div>
        </Section>
    )
}

export default register