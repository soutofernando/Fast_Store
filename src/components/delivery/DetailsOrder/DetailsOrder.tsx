import React from 'react'
import type { CartItem as ICartItem } from 'src/sdk/cart/validate'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import Price from 'src/components/ui/Price'

interface Props {
    item: ICartItem
}

const DetailsOrder = ({ item }: Props) => {
    return (
        <div className=' mt-6 mb-4'>
            <div className='mt-4 flex h-32  mb-4'>
                <div>
                    <img src={item.itemOffered.image[0].url} alt={item.itemOffered.image[0].alternateName} className="w-48 lg:w-56 border-b-slate-300" height="130px" />
                </div>
                <div className='block p-2'>
                    <div>
                        <span>{item.itemOffered.isVariantOf.name.toUpperCase()}</span>
                    </div>
                    <div>
                        <span> <Price
                            className='font-light '
                            value={item.price}
                            formatter={useFormattedPrice}
                            testId="price"
                            data-value={item.price}
                            variant="spot"
                            classes="title-subsection"
                            SRText="Price:"
                        />
                        </span>
                    </div>
                    <div>
                        <span>Quantidade: {item.quantity}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailsOrder