import React, { useContext } from 'react'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const LoginEmail = () => {
  
  const { loginEmail, setLoginEmail } = useContext(FireContext)

  return (
    <div className="mt-6">
      <div className="mb-2">
        <label className='font-mono text-base'>Email:</label>
      </div>
      <div>
        <input onChange={(e) => setLoginEmail(e.target.value)} value={loginEmail} placeholder='E-mail *' type="email" className='border border-black p-4 w-full' />
      </div>
    </div>
  )
}

export default LoginEmail 