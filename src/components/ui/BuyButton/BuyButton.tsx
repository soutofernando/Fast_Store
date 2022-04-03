import React from 'react'
import { Button as UIButton } from '@faststore/ui'
import type { ButtonProps } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'

import './buy-button.scss'

type Props = ButtonProps

function BuyButton({ children, ...props }: Props) {
  return (
    <UIButton className="button" data-store-buy-button {...props}>
      {children}
      <Icon name="ArrowRight" width={18} height={18} weight="bold"  />
    </UIButton>
  )
}

export default BuyButton
