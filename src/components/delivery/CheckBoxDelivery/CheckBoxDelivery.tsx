import { Checkbox } from '@faststore/ui'
import { Link } from 'gatsby'
import React from 'react'

const CheckBoxDelivery = () => {
    return (
        <div className='mt-6'>
            <div className='flex mb-4'>
                <Checkbox />
                <span className='ml-2'>Minhas informações de cobrança e entrega são as mesmas</span>
            </div>
            <div className='flex mb-4'>
                <Checkbox />
                <span className='ml-2'>Tenho mais de 18 anos &nbsp;<Link className='hover:bg-black hover:text-white underline' to="/delivery">Por que isso importa?</Link> *</span>
        </div>
        </div >
    )
}

export default CheckBoxDelivery