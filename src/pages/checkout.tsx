import React, { useContext } from 'react'
import CheckoutContainer from 'src/components/checkout/CheckoutContainer/CheckoutContainer'
import CheckoutHeader from 'src/components/checkout/CheckoutHeader/CheckoutHeader'
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
        <CheckoutHeader />
        <div className=' flex mb-4 mt-4'>
          <span className='text-xl font-mono font-semibold flex'>Olá, {delivery.map((item: any) => (<div>{item.username} {item.secondName}</div>))}</span>
        </div>
        <div>
          <CheckoutContainer />
        </div>
      </div>
    </Section>
  )
}

export default checkout