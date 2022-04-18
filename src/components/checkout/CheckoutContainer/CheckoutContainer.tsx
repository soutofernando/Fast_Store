import React, { useContext } from 'react'
import CheckoutDetails from '../CheckoutDetails/CheckoutDetails'
import { useCart } from 'src/sdk/cart/useCart'
import { CheckoutContext } from 'src/utils/CheckoutContext/CheckoutProvider'
import DetailsOrder from 'src/components/delivery/DetailsOrder/DetailsOrder'
import FinishOrderBtn from '../FinishOrderBtn/FinishOrderBtn'
import PaymentDetails from 'src/components/payment/PaymentDetails/PaymentDetails'

const CheckoutContainer = () => {

    const { items } = useCart()
    const { delivery, payment, paymentWithTicket } = useContext(CheckoutContext)

    return (
        <div>
            <div className='p-6 border border-black flex justify-around '>
                <div>
                    {items.map((item) => (<div><DetailsOrder item={item} /></div>))}
                </div>
                <div>
                    <div>
                        {delivery.map((item) => (<div><CheckoutDetails item={item} /></div>))}
                    </div>
                    <div>
                        {paymentWithTicket ? "Pagou com boleto"
                            :
                            <div> {payment.map((item) => (<div><PaymentDetails item={item} /></div>))}</div>}
                    </div>
                </div>
            </div>
            <div>
                <FinishOrderBtn />
            </div>
        </div>
    )
}

export default CheckoutContainer