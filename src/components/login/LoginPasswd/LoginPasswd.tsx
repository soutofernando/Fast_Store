import React from 'react'

const LoginPasswd = () => {
    return (
        <div className="mt-4">
            <div className="mb-2">
                <label className='font-mono text-base'>Senha:</label>
            </div>
            <div>
                <input placeholder='Senha *' type="password" className='border border-black p-4 w-full' />
            </div>
        </div>
    )
}

export default LoginPasswd