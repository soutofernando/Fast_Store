import React from 'react'
import NeedHelp from 'src/components/cart/NeedHelp/NeedHelp'
import Navbar from 'src/components/common/Navbar'
import FavoriteHeader from 'src/components/favorite/FavoriteHeader/FavoriteHeader'
import Section from 'src/components/sections/Section'

const favorite = () => {
  return (
    <Section>
      <Navbar />
      <div className='xl:flex justify-around mt-4 mr-48 ml-48'>
        <div className='w-3/4'>
          <div>
            <FavoriteHeader />
          </div>
          <div>

          </div>
        </div>
        <div className='w-5/12'>
          <NeedHelp />
        </div>
      </div>
    </Section>
  )
}

export default favorite