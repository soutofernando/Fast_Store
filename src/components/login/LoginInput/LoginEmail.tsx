import React from 'react'

const LoginEmail = () => {
  return (
    <div className="mt-6">
        <div className="mb-2">
            <label className='font-mono text-base'>Email:</label>
        </div>
        <div>
            <input placeholder='E-mail *' type="email" className='border border-black p-4 w-full'/>
        </div>
    </div>
  )
}

export default LoginEmail