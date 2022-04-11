import React from 'react'
import Icon from 'src/components/ui/Icon'

const DeliveryMethod = () => {
    return (
        <div className='mt-6'>
            <div>
                <span className='text-4xl font-black'>MÉTODO DE ENTREGA</span>
            </div>
            <div className='border p-4 mt-4'>
                <div className='flex justify-between'>
                    <span className='font-black'>ENTREGA CONVENCIONAL - REGIÃO SUDESTE E SUL</span>
                    <span>Livre</span>
                </div>
                <div className='flex mt-1'>
                    <span className='font-black'><Icon name="Truck" width={20} height={20} /></span>
                    <span className=' mb-2 ml-3'>Previsão de entrega de acordo com nossa política de entrega.</span>
                </div>
            </div>
        </div>
    )
}

export default DeliveryMethod