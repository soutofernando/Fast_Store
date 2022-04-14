import React, { useContext } from 'react'
import CheckoutNav from 'src/components/checkout/CheckoutNav/CheckoutNav'
import CheckoutPhases from 'src/components/checkout/CheckoutPhases/CheckoutPhases'
import Section from 'src/components/sections/Section'
import { CheckoutContext } from "../utils/CheckoutContext/CheckoutProvider"

const checkout = () => {

  const { delivery } = useContext(CheckoutContext)

  return (
    <Section>
      <CheckoutNav />
      <div className='lg:mr-48 lg:ml-48'>
        <CheckoutPhases />
      </div>
      <hr />
      <div className='lg:mr-48 lg:ml-48'>
        {delivery.map((item: any) => (<div>{item.username}</div>))}
      </div>
    </Section>
  )
}

export default checkout