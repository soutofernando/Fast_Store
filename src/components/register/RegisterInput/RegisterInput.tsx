import React, { useContext } from 'react'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const RegisterInput = () => {

    const { registerEmail, setRegisterEmail } = useContext(FireContext)

    return (
        <div>
            <div className="mt-4">
                <div className="mb-2">
                    <label className='font-mono text-base'>Email:</label>
                </div>
                <div>
                    <input onChange={(e) => setRegisterEmail(e.target.value)} value={registerEmail} placeholder="E-mail *" className='border border-black p-4 w-full' />
                </div>
            </div>
        </div>
    )
}

export default RegisterInput