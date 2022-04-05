import React, { useContext } from 'react'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const RegisterButton = () => {

    const { register } = useContext(FireContext)

    return (
        <div>
            <Button onClick={register} className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                <div className='flex'>REGISTRAR<div className='ml-4'>
                    <Icon name='ArrowRight' width={25} height={25} />
                </div>
                </div>
            </Button>
        </div>
    )
}

export default RegisterButton