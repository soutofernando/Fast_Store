import React from 'react'
import LittleOrderSummary from '../OrderSummary/LittleOrderSummary'


interface Props {
    subTotal: number
    totalItems: number

}

const CartHeader = ({ subTotal, totalItems }: Props) => {

    return (
        <div className="block">
            <div className='text-4xl font-black'>
                <span>SEU CARRINHO</span>
            </div>
            <div>
                <LittleOrderSummary
                    subTotal={subTotal}
                    numberOfItems={totalItems}
                />
            </div>
            <div className="bg-orange-50 mt-4 pb-14 p-6">
                <div className='font-black text-xl'>SEMANA DO CLUBE TEM FRETE GRÁTIS ATÉ O DIA 07 DE ABRIL</div>
                <div className=''>Aproveite o frete grátis para todas as suas compras</div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CartHeader