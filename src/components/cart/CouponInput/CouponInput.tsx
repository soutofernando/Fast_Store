import React from 'react'

const CouponInput = () => {
  return (
    <div className='mt-4'>
        <div className="mb-2">
            <label className='font-mono text-lg'>Cupom:</label>
        </div>
        <input placeholder='Digite cupom promocional' className='p-5 border border-black w-full '/>
    </div>
  )
}

export default CouponInput