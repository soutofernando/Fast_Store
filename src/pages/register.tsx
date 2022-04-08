import React from 'react'
import LoginInfo from 'src/components/login/LoginInfo/LoginInfo'
import RegisterForm from 'src/components/register/RegisterForm/RegisterForm'
import RegisterHeader from 'src/components/register/RegisterHeader/RegisterHeader'
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
                        <RegisterForm />
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