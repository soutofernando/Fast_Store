import React, { FC } from 'react'
import { Payment } from 'src/utils/CheckoutContext/CheckoutProvider'

interface Props {
    item: Payment
}

const PaymentDetails: FC<Props> = ({ item }) => {
    return (
        <div className='mt-4'>
            <div >
                <div>
                    <span className='text-xl font-black'>DETALHES DO PAGAMENTO:</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.parcel}</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.numberCard} </span>
                </div>
                <div className=' mb-1'>
                    {item.nameCard}
                </div>

            </div>
            <hr className='mt-4' />
        </div>
    )
}

export default PaymentDetails