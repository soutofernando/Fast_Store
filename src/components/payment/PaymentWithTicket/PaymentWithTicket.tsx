import { Checkbox } from '@faststore/ui'
import React from 'react'

const PaymentWithTicket = () => {
    return (
        <div>
            <div className="mt-4 mb-4">
                <span className='font-black text-xl'>Boleto bancário:</span>
            </div>
            <div className='flex'>
                <Checkbox />
                <span className='mb-1 ml-2'>Pagar com o boleto bancário</span>
            </div>
        </div>
    )
}

export default PaymentWithTicket