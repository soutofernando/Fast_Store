import { useCart } from './useCart'

export const useCartToggleButton = () => {
  const { totalItems } = useCart()

  return {

    'data-testid': 'cart-toggle',
    'data-items': totalItems,
  }
}
