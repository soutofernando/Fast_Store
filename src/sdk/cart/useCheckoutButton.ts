import { useCart } from './useCart'
import * as storeConfig from '../../../store.config'

const { checkoutUrl } = storeConfig

export const useCheckoutButton = () => {
  const { isValidating } = useCart()

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (!isValidating) {
      window.location.href = `${checkoutUrl}`
    }
  }

  return {
    onClick,
    disabled: isValidating,
    'data-testid': 'checkout-button',
  }
}
