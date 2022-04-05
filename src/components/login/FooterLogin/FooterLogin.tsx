import { Button } from '@faststore/ui'
import React from 'react'
import Icon from 'src/components/ui/Icon'

const FooterLogin = () => {
    return (
        <div className="w-full bg-yellow-300 flex  p-10 text-center justify-center mt-4 pb-10">
            <div className='mr-4 w-1/3'>
                <span className='text-3xl font-black'>ENTRE PARA O CLUBE E GANHE 15% OFF</span>
            </div>
            <div>
                <Button className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                    <div className='flex'>CADASTRE-SE GRATUITAMENTE<div className='ml-4'>
                        <Icon name='ArrowRight' width={25} height={25} />
                    </div>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default FooterLogin