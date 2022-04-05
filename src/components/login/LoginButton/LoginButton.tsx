import { Button } from '@faststore/ui'

import React, { useContext } from 'react'
import Icon from 'src/components/ui/Icon'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const LoginButton = () => {

    const { login } = useContext(FireContext)

    return (
        <div className="mt-4">
            <Button onClick={login} className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                <div className='flex'>IDENTIFIQUE-SE<div className='ml-4'>
                    <Icon name='ArrowRight' width={25} height={25} />
                </div>
                </div>
            </Button>
        </div>
    )
}

export default LoginButton