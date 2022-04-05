import { Checkbox, Radio } from '@faststore/ui'
import { Link } from 'gatsby'
import React from 'react'

const KeepConnected = () => {
  return (
    <div className='flex mt-4'>
        <div>
            <Checkbox  />
        </div>
        <div className='ml-2'>
            <span>Mantenha-me conectado.<Link to="/login" className='underline hover:bg-black hover:text-white rounded-none'> Mais informações</Link></span>
        </div>
    </div>
  )
}

export default KeepConnected