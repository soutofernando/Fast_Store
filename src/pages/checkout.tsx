import React from 'react'
import CheckoutNav from 'src/components/checkout/CheckoutNav/CheckoutNav'
import CheckoutPhases from 'src/components/checkout/CheckoutPhases/CheckoutPhases'
import Section from 'src/components/sections/Section'

const checkout = () => {


  return (
    <Section>
      <CheckoutNav />
      <div  className='lg:mr-48 lg:ml-48'>
        <CheckoutPhases />
      </div>
      <hr/>
      <div className='lg:mr-48 lg:ml-48'>
        sdsd
      </div>
    </Section>
  )
}

export default checkout