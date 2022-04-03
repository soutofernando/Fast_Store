import React from 'react'
import { List } from '@faststore/ui'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import "./order-summary.scss"


interface OrderSummaryProps {
    subTotal: number
    numberOfItems: number
   
}

const LittleOrderSummary = ({
    subTotal,
    numberOfItems,
}: OrderSummaryProps) => {

    return (
        <List >
            <div className="mt-4">
                <li>
                    <span>TOTAL ({numberOfItems} produto) <span className='font-black'>{useFormattedPrice(subTotal)}</span></span>
                </li>
            </div>
            <div className='mt-2 w-11/12'>
                <span>Os itens do seu carrinho não estão reservados. Finalize esta compra para torná-los seus itens pessoais.</span>
            </div>
        </List>
    )
}

export default LittleOrderSummary