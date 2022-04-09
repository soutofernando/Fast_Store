import React, { useEffect } from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import storeConfig from '../../store.config'

function Page() {
  useEffect(() => {
    window.location.href = storeConfig.checkoutUrl
  }, [])

  return (
    <>
      <GatsbySeo noindex nofollow />

      <div className='text-2xl font-extrabold flex justify-center p-4'>AGUARDE ENQUANTO VOCE ESTÁ SENDO REDIRECIONADO PARA FINALIZAR SUA COMPRA!</div>
    </>
  )
}

export default Page
