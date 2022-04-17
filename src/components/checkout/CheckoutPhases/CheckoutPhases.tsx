import { Link } from 'gatsby'
import React, { useContext } from 'react'
import Button from 'src/components/ui/Button'
import { CheckoutContext } from 'src/utils/CheckoutContext/CheckoutProvider'


const CheckoutPhases = () => {

    const { deliveryphase, paymentphase } = useContext(CheckoutContext)


    return (
        <div className='lg:flex'>
            <div>
                <Link to="/cart">
                    <Button>
                        <div className='bg-black text-white rounded-full mr-2 w-6 h-6'>1</div>CARRINHO
                    </Button>
                </Link>
            </div>
            <div>
                <Link to="/delivery">
                    <Button>
                        <div className='bg-black text-white rounded-full mr-2 w-6 h-6'>2</div> ENTREGA
                    </Button>
                </Link>
            </div>
            <div>
                {deliveryphase ?
                    <Link to="/payment" >
                        <Button>
                            <div className='bg-black text-white rounded-full mr-2 w-6 h-6'>3</div> PAGAMENTO
                        </Button>
                    </Link>
                    :
                    <Button disabled>
                        <div className='bg-gray-500 text-white rounded-full mr-2 w-6 h-6'>3</div> PAGAMENTO
                    </Button>
                }

            </div>
            <div>
                {paymentphase ?
                    <Link to="/checkout">
                        <Button>
                            <div className='bg-black text-white rounded-full mr-2 w-6 h-6'>4</div> PEDIDO FINALIZADO
                        </Button>
                    </Link>
                    :
                    <Button disabled>
                        <div className='bg-gray-500 text-white rounded-full mr-2 w-6 h-6'>4</div> PEDIDO FINALIZADO
                    </Button>
                }

            </div>
        </div>
    )
}

export default CheckoutPhases