import { IconButton } from '@faststore/ui'
import { Link } from 'gatsby'
import React, { useContext } from 'react'
import Icon from 'src/components/ui/Icon'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'
import { FireContext } from 'src/utils/FireContext/FireProvider'


const SignInLink: React.FC = () => {

  const { user } = useContext(FireContext)
  const btnProps = useCartToggleButton()

  return (
    <Link to={user ? "/userprofile" : "/login" }>
      <IconButton
        {...btnProps}
        className="title-sub-subsection signin-link"
        aria-label={`Cart with ${btnProps['data-items']} items`}
        icon={<Icon name="User" width={18} height={18} weight="bold" color='black' />}
      />
    </Link>
  )
}

export default SignInLink