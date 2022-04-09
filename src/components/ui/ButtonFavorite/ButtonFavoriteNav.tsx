import { Link } from 'gatsby'
import React, { FC } from 'react'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'
import Icon from '../Icon'
import IconButton from '../IconButton'

const ButtonFavoriteNav: FC = () => {

    const btnProps = useCartToggleButton()

    return (
        <div>
            <Link to="/favorite">
                <IconButton
                    {...btnProps}
                    aria-label={`Cart with ${btnProps['data-items']} items`}
                    icon={<Icon name="Plus" width={28} height={28} />}
                    className="w-7 h-7 p-2  content-center"
                />
            </Link>
        </div>
    )
}

export default ButtonFavoriteNav