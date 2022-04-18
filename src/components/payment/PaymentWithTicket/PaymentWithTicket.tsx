import { Checkbox } from '@faststore/ui'
import React, { useContext } from 'react'
import { CheckoutContext } from 'src/utils/CheckoutContext/CheckoutProvider'

const PaymentWithTicket = () => {

    const { onClickpaymentWith } = useContext(CheckoutContext)

    return (
        <div>
            <div className="mt-4 mb-4">
                <span className='font-black text-xl'>Boleto bancário:</span>
            </div>
            <div className='flex'>
                <Checkbox onClick={onClickpaymentWith} />
                <span className='mb-1 ml-2'>Pagar com o boleto bancário</span>
            </div>
        </div>
    )
}

export default PaymentWithTicket