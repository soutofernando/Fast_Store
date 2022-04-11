import React from 'react'
import CouponInput from 'src/components/cart/CouponInput/CouponInput'
import NeedHelp from 'src/components/cart/NeedHelp/NeedHelp'
import OrderSummary from 'src/components/cart/OrderSummary'
import PayWith from 'src/components/cart/PayWith/PayWith'
import CheckoutNav from 'src/components/checkout/CheckoutNav/CheckoutNav'
import CheckoutPhases from 'src/components/checkout/CheckoutPhases/CheckoutPhases'
import DeliveryForm from 'src/components/delivery/DeliveryForm.tsx/DeliveryForm'
import DeliveryHeader from 'src/components/delivery/DeliveryHeader/DeliveryHeader'
import DetailsOrder from 'src/components/delivery/DetailsOrder/DetailsOrder'
import Section from 'src/components/sections/Section'
import { useCart } from 'src/sdk/cart/useCart'

const delivery = () => {
  const cart = useCart()
  const { totalItems, subTotal, total, items } = cart

  return (
    <Section>
      <div>
        <CheckoutNav />
        <div className='lg:mr-48 lg:ml-48'>
          <CheckoutPhases />
        </div>
        <hr />
        <div className='lg:mr-48 lg:ml-48 mt-4'>
          <DeliveryHeader />
        </div>
        <div className='mr-6 ml-6 lg:mr-48 lg:ml-48 lg:flex lg:justify-around '>
          <div className='lg:w-1/2 lg:block'>
            <DeliveryForm />
          </div>
          <div className='lg:w-1/3'>
            <OrderSummary numberOfItems={totalItems} total={total} subTotal={subTotal} />
            <CouponInput />
            <div className='mt-4'>
              <span className='text-xl font-black'>DETALHES DO PEDIDO:</span>
            </div>
            {items.map((item: any) => (<DetailsOrder item={item} />))}
            <hr className='mt-4' />
            <NeedHelp />
            <PayWith />
          </div>
        </div>
      </div>
    </Section >
  )
}

export default delivery