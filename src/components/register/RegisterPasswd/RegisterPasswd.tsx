import React, { useContext } from 'react'
import { FireContext } from 'src/utils/FireContext/FireProvider'


const RegisterPasswd = () => {

    const { registerPasswd, setRegisterPasswd } = useContext(FireContext)

    return (
        <div className="mt-4">
            <div className="mb-2">
                <label className='font-mono text-base'>Senha:</label>
            </div>
            <div>
                <input onChange={(e) => setRegisterPasswd(e.target.value)} value={registerPasswd} placeholder='Senha *' type="password" className='border border-black p-4 w-full' />
            </div>
        </div>
    )
}

export default RegisterPasswd