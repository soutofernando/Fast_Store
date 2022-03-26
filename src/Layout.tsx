import React, { lazy, Suspense } from 'react'
import Alert from 'src/components/common/Alert'
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
    <div id="layout">
      <HeaderUpper />
      <Navbar />
      <Alert>
        Entre gratuitamente para o adiClub e ganhe 15% de desconto.&nbsp;<span>Entre para o clube</span>
      </Alert>

      <main>{children}</main>

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
