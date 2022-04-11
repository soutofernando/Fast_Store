import { Link } from 'gatsby'
import React from 'react'
import Logo from 'src/components/ui/Logo'

const CheckoutNav = () => {
  return (
      <div className='p-4 flex justify-between'>
        <div className='w-16'>
          <Logo />
        </div>
        <div className='flex font-extralight underline '>
          <div className='mr-2 lg:mr-4 font-extralight'>
            <Link className='hover:bg-black hover:text-white' to="/checkout">frete grátis</Link>
          </div>
          <div className='mr-2 lg:mr-4 font-extralight underline '>
            <Link className='hover:bg-black hover:text-white' to="/checkout">trocas e devoluções</Link>
          </div>
          <div className='mr-2 lg:mr-4 font-extralight underline '>
            <Link className='hover:bg-black hover:text-white' to="/checkout">precisa de ajuda?</Link>
          </div>
        </div>
      </div>
  )
}

export default CheckoutNav