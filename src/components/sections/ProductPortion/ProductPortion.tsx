import { Link } from '@faststore/ui'
import React from 'react'
import Section from '../Section'

interface Props {
    price: number
}

const ProductPortion = ({ price }: Props) => {
    return (
        <div>
            <Section className='block font-light text-sm'>
                <div className=''>
                    Até 10 x $<strong>{price / 10}</strong> sem juros
                </div>
                <div className='pr-1'>
                    <Link>Ver outras opções</Link>
                </div>
            </Section>
        </div>
    )
}

export default ProductPortion