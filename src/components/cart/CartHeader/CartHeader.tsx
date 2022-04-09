import { Link } from 'gatsby'
import React from 'react'
import LittleOrderSummary from '../OrderSummary/LittleOrderSummary'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'


interface Props {
    subTotal: number
    totalItems: number

}

const CartHeader = ({ subTotal, totalItems }: Props) => {

    return (
        <div className="block">
            {totalItems > 0 ?
                <div>
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
                </div> :
                <div>
                    <div className='text-4xl font-black'>
                        <span>SEU CARRINHO ESTÁ VAZIO</span>
                    </div>
                    <div className="mt-4">
                        Quando adicionares algo ao teu saco de compras, vai aparecer aqui. Pronto para começar?
                    </div>
                    <div className='mt-4 mb-4'>
                        <Link to="/">
                            <Button className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                                <div className='flex'>COMEÇAR<div className='ml-4'>
                                    <Icon name='ArrowRight' width={25} height={25} />
                                </div>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default CartHeader