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
                    <span>{item.username.charAt(0).toUpperCase() + item.username.slice(1)} {item.secondName.charAt(0).toUpperCase() + item.secondName.slice(1)}</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.adress.charAt(0).toUpperCase() + item.adress.slice(1)},{item.numberHouse} </span>
                </div>
                <div className=' mb-1'>
                    {item.additionalInfo ? <span>{item.additionalInfo.charAt(0).toUpperCase() + item.additionalInfo.slice(1)}</span> : ""}
                </div>
                <div className=' mb-1'>
                    <span>{item.district.charAt(0).toUpperCase() + item.district.slice(1)}</span>
                </div>
                <div className=' mb-1'>
                    <span>{item.city.charAt(0).toUpperCase() + item.city.slice(1)}, {item.state}, {item.postalCode}, Brasil</span>
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