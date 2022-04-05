import { Button } from '@faststore/ui'
import React from 'react'


const LoginWith = () => {
    return (
        <div>
            <div>
                <Button className='border border-black w-52'>
                    <div className='flex p-2 rounded-none justify-between'>
                        <span className='mt-2 font-black'> GOOGLE</span>
                        <img width={40} height={40} src='https://cdn-teams-slug.flaticon.com/google.jpg' />
                    </div>
                </Button>
            </div>
            <div className='mt-4'>
                <Button className='border border-black w-52'>
                    <div className='flex p-2 rounded-none justify-between'>
                        <span className='mt-2 font-black'> FACEBOOK</span>
                        <img width={40} height={40} src='https://icones.pro/wp-content/uploads/2021/02/facebook-icones.png' />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default LoginWith