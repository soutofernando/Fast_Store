import React from 'react'
import IconButton from 'src/components/ui/IconButton'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'
import Icon from 'src/components/ui/Icon'

import './cart-toggle.scss'
import { Link } from 'gatsby'

function CartToggle() {
  const btnProps = useCartToggleButton()

  return (
    <Link to="/cart">
      <IconButton
        {...btnProps}
        className="cart-toggle"
        aria-label={`Cart with ${btnProps['data-items']} items`}
        icon={<Icon name="ShoppingCart" width={28} height={28} />}
      />
    </Link>
  )
}

export default CartToggle
