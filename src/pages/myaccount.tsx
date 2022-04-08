import React, { useContext } from 'react'
import MyaccountHeader from 'src/components/myaccount/MyaccountHeader/MyaccountHeader'
import Section from 'src/components/sections/Section'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const myaccount = () => {
    const { } = useContext(FireContext)
    return (
        <Section>
            <div className='xl: mt-4 mr-48 ml-48'>
                <div>
                    <MyaccountHeader />
                </div>
            </div>
        </Section>
    )
}

export default myaccount