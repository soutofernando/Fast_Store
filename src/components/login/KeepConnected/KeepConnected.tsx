import { Checkbox } from '@faststore/ui'
import { Link } from 'gatsby'
import React from 'react'
import { useContext } from 'react'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const KeepConnected = () => {

  const { keepconnected, setKeepConnected } = useContext(FireContext)

  return (
    <div className='flex mt-4'>
      {console.log(keepconnected)}
      <div>
        <Checkbox onClick={() => setKeepConnected(!keepconnected)} />
      </div>
      <div className='ml-2'>
        <span>Mantenha-me conectado.<Link to="/login" className='underline hover:bg-black hover:text-white rounded-none'> Mais informações</Link></span>
      </div>
    </div>
    
  )
}

export default KeepConnected