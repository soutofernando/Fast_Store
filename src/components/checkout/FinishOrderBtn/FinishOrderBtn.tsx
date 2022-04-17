import React from 'react'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'


const FinishOrderBtn = () => {

    return (
        <div className='mt-6 mb-6'>
            <Button type="submit" className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                <div className='flex'>FINALIZAR<div className='ml-4'>
                    <Icon name='ArrowRight' width={25} height={25} />
                </div>
                </div>
            </Button>
        </div>
    )
}

export default FinishOrderBtn