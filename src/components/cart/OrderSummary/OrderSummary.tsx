import { ReactNode } from 'react'
import React from 'react'
import { List } from '@faststore/ui'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import './order-summary.scss'



interface OrderSummaryProps {
  subTotal: number
  total: number
  numberOfItems: number
  checkoutButton?: ReactNode
}

function OrderSummary({
  total,
  numberOfItems,
}: OrderSummaryProps) {

  return (
    <List className="order-summary" data-order-summary>
      <div className='mt-10 border p-4'>
        <div className='font-black text-xl'>
          RESUMO DO PEDIDO
        </div>
        <div className='flex justify-between mt-3'>
          <span>{numberOfItems <= 1 ? <div>{numberOfItems} PRODUTO</div> : <div>{numberOfItems} PRODUTOS</div>} </span>
          <span>{useFormattedPrice(total)}</span>
        </div>
        <div className='flex justify-between mt-3'>
          <span>ENTREGA</span>
          <span>Livre</span>
        </div>
        <div className="flex justify-between mt-3 font-black">
          <span>TOTAL</span>
          <span>{useFormattedPrice(total)}</span>
        </div>
      </div>
    </List>
  )
}

export default OrderSummary
