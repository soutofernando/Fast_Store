import { Link } from 'gatsby'
import React from 'react'
import Button from 'src/components/ui/Button'

const CheckoutPhases = () => {
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
                <Link to="/payment">
                    <Button>
                        <div className='bg-black text-white rounded-full mr-2 w-6 h-6'>3</div> PAGAMENTO
                    </Button>
                </Link>
            </div>
            <div>
                <Link to="/checkout">
                    <Button>
                        <div className='bg-black text-white rounded-full mr-2 w-6 h-6'>4</div> PEDIDO FINALIZADO
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutPhases