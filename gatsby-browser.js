import './src/styles/fonts.css'
import './src/styles/theme.scss'
import './src/styles/layout.scss'
import './src/styles/global.css'

import { CartProvider, SessionProvider, UIProvider } from '@faststore/sdk'
import React from 'react'

import Layout from './src/Layout'
import AnalyticsHandler from './src/sdk/analytics'
import { validateCart } from './src/sdk/cart/validate'
import ErrorBoundary from './src/sdk/error/ErrorBoundary'
import TestProvider from './src/sdk/tests'
import { uiActions, uiEffects, uiInitialState } from './src/sdk/ui'
import storeConfig from './store.config'
import FireProvider from "./src/utils/FireContext/FireProvider"
import CheckoutProvider from "./src/utils/CheckoutContext/CheckoutProvider"

export const wrapRootElement = ({ element }) => (
  <FireProvider>
    <CheckoutProvider>
      <ErrorBoundary>
        <AnalyticsHandler />
        <TestProvider>
          <UIProvider
            initialState={uiInitialState}
            actions={uiActions}
            effects={uiEffects}
          >
            <SessionProvider initialState={{ channel: storeConfig.channel }}>
              <CartProvider mode="optimistic" onValidateCart={validateCart}>
                {element}
              </CartProvider>
            </SessionProvider>
          </UIProvider>
        </TestProvider>
      </ErrorBoundary>
    </CheckoutProvider>
  </FireProvider>
)

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
