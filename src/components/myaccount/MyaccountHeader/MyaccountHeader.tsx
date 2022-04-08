import React, { useContext } from 'react'
import { FireContext } from 'src/utils/FireContext/FireProvider'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

const MyaccountHeader = () => {
    const { logout, user } = useContext(FireContext)
    return (
        <div className=''>
            <div className='p-2 flex justify-between'>
                <div >
                    <span className='flex text-3xl'><div className='font-black'>adi</div><div className='italic font-mono'>club</div></span>
                    <span className='text-xl font-bold flex'>Olá,&nbsp;<div className='font-medium'>{user?.email}</div></span>
                </div>
                <div>
                    <Button onClick={logout} className='bg-black text-white p-4 font-mono font-black hover:text-gray-600 '>
                        <div className='flex'>LOGOUT<div className='ml-4'>
                            <Icon name='ArrowRight' width={25} height={25} />
                        </div>
                        </div>
                    </Button>
                </div>
            </div>
            <div className="flex justify-center">
                dsd
                
            </div>
        </div>
    )
}

export default MyaccountHeader