import React, { useContext, useRef } from 'react'
import Alert from 'src/components/ui/Alert'
import { Badge } from 'src/components/ui/Badge'
import Button from 'src/components/ui/Button'
import IconButton from 'src/components/ui/IconButton'
import SlideOver from 'src/components/ui/SlideOver'
import { useCart } from 'src/sdk/cart/useCart'
import { useCheckoutButton } from 'src/sdk/cart/useCheckoutButton'
import { useUI } from 'src/sdk/ui'
import Icon from 'src/components/ui/Icon'

import EmptyCart from '../EmptyCart'
import OrderSummary from '../OrderSummary'

import './cart-sidebar.scss'
import { Link } from 'gatsby'
import { FireContext } from 'src/utils/FireContext/FireProvider'

type Callback = () => unknown

function CartSidebar() {
  const btnProps = useCheckoutButton()
  const cart = useCart()
  const { displayMinicart, closeMinicart } = useUI()
  const dismissTransition = useRef<Callback | undefined>()

  const { items, totalItems, isValidating, subTotal, total } = cart

  const { user } = useContext(FireContext)

  const isEmpty = items.length === 0

  return (
    <SlideOver
      isOpen={displayMinicart}
      onDismiss={closeMinicart}
      onDismissTransition={(callback) => (dismissTransition.current = callback)}
      size="partial"
      direction="leftSide"
      className="cart-sidebar"
    >
      <header data-testid="cart-sidebar">
        <div className="cart-sidebar__title">
          <p className="title-display">Seu Carrinho</p>
          <Badge variant="info" small>
            {totalItems}
          </Badge>
        </div>
        <IconButton
          data-testid="cart-sidebar-button-close"
          aria-label="Close Cart"
          icon={<Icon name="X" width={32} height={32} />}
          onClick={() => dismissTransition.current?.()}
        />
      </header>
      <Alert className='pr-4' icon={<Icon name="Truck" width={24} height={24} />}>
        Aproveite a promoção de frete grátis
      </Alert>

      {isEmpty ? (
        <EmptyCart onDismiss={() => dismissTransition.current?.()} />
      ) : (
        <>
          <footer >
            <div className='mb-10'>
              <Link to="/">
                <Button className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                  <div className='flex justify-between'>CONTINUAR COMPRANDO<div className='ml-4'>
                    <Icon name='ArrowRight' width={25} height={25} />
                  </div>
                  </div>
                </Button>
              </Link>
            </div>
            {user ? <div>
              <Button
                className='bg-black text-white flex p-4 justify-between text-center mt-10 w-full'
                icon={
                  !isValidating && (
                    <Icon className='mt-1' name="ArrowRight" width={18} height={18} />
                  )
                }
                iconPosition="right"
                onClick={() => window.location.href = "/delivery"}
              >
                {isValidating ? 'Carregando...' : 'FINALIZAR'}
              </Button>
            </div> :
              <div>
                <Button
                  className='bg-black text-white flex p-4 justify-between text-center mt-10 w-full'
                  icon={
                    !isValidating && (
                      <Icon className='mt-1' name="ArrowRight" width={18} height={18} />
                    )
                  }
                  iconPosition="right"
                  onClick={() => window.location.href = "/login"}
                >
                  {isValidating ? 'Carregando...' : 'FINALIZAR'}
                </Button>
              </div>
            }
            <OrderSummary
              subTotal={subTotal}
              total={total}
              numberOfItems={totalItems}
              checkoutButton={user ?
                <Button
                  className='bg-black text-white flex p-4 justify-between text-center mt-10'
                  icon={
                    !isValidating && (
                      <Icon className='mt-1' name="ArrowRight" width={18} height={18} />
                    )
                  }
                  iconPosition="right"
                  {...btnProps}
                >
                  {isValidating ? 'Carregando...' : 'FINALIZAR'}
                </Button>
                :
                <Button
                  className='bg-black text-white flex p-4 justify-between text-center mt-10'
                  icon={
                    !isValidating && (
                      <Icon className='mt-1' name="ArrowRight" width={18} height={18} />
                    )
                  }
                  iconPosition="right"
                  onClick={() => window.location.href = "/login"}
                >
                  {isValidating ? 'Carregando...' : 'FINALIZAR'}
                </Button>
              }
            />
          </footer>
        </>
      )}
    </SlideOver>
  )
}

export default CartSidebar
