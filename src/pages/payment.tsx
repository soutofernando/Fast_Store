import React from 'react'
import CouponInput from 'src/components/cart/CouponInput/CouponInput'
import NeedHelp from 'src/components/cart/NeedHelp/NeedHelp'
import OrderSummary from 'src/components/cart/OrderSummary'
import PayWith from 'src/components/cart/PayWith/PayWith'
import CheckoutNav from 'src/components/checkout/CheckoutNav/CheckoutNav'
import CheckoutPhases from 'src/components/checkout/CheckoutPhases/CheckoutPhases'
import DetailsOrder from 'src/components/delivery/DetailsOrder/DetailsOrder'
import PaymentForm from 'src/components/payment/PaymentForm/PaymentForm'
import PaymentHeader from 'src/components/payment/PaymentHeader/PaymentHeader'
import Section from 'src/components/sections/Section'
import { useCart } from 'src/sdk/cart/useCart'


const payment = () => {

  const cart = useCart()
  const { totalItems, subTotal, total, items } = cart

  return (
    <Section>
      <CheckoutNav />
      <div className='lg:mr-48 lg:ml-48'>
        <CheckoutPhases />
      </div>
      <hr />
      <div className='lg:mr-48 lg:ml-48 ml-6'>
        <PaymentHeader />
        <div className='lg:flex lg:justify-between ml-6 mr-6'>
          <div className='lg:w-1/2'>
            <PaymentForm />
          </div>
          <div className='block'>
            <OrderSummary
              subTotal={subTotal}
              total={total}
              numberOfItems={totalItems} />
            <CouponInput />
            <div className="mt-4">
              <span className='font-black text-xl'>DETALHES DO PEDIDO:</span>
            </div>
            {items.map((item: any) => (<DetailsOrder item={item} />))}
            <NeedHelp />
            <PayWith />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default payment