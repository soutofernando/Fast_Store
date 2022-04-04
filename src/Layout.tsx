import React, { lazy, Suspense } from 'react'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
import HeaderUpper from 'src/components/common/Header_Upper/HeaderUpper'
import { useUI } from 'src/sdk/ui'
import type { PropsWithChildren } from 'react'



const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart } = useUI()

  return (
    <div id="layout" >
      <HeaderUpper />
      <Navbar />

      <main>{children}</main>
 
      {/* saber como fazer caso a url seja /cart, nao renderizar o footer e toast */}
      <Footer />

      <Toast />

      {displayMinicart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}
    </div>
  )
}

export default Layout
