import React from 'react'
import { Delivery } from 'src/utils/CheckoutContext/CheckoutProvider'

interface Props {
    item: Delivery
}

const CheckoutDetails = ({ item }: Props) => {

    return (
        <div>
            <div >
                <div>
                    <span className='text-xl font-black'>DETALHES DA ENTREGA:</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.username} {item.secondName}</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.adress},{item.numberHouse} </span>
                </div>
                <div className=' mb-1'>
                    {item.additionalInfo ? <span>{item.additionalInfo}</span> : ""}
                </div>
                <div className=' mb-1'>
                    <span>{item.district}</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.city}, {item.state}, {item.postalCode}, Brasil</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.phoneNumber}</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.email}</span>
                </div>
            </div>
            <hr className='mt-4'/>
        </div>
    )
}

export default CheckoutDetails