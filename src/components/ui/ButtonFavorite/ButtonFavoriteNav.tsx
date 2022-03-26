import { Button } from '@faststore/ui'
import React, { FC } from 'react'
import Icon from '../Icon'

const ButtonFavoriteNav: FC = ({ children }) => {
    return (
        <div>
            <Button className="w-7 h-7 p-2 mr-7 content-center">
                <Icon className='w-7 h-7 content-center'  name="Truck" />
            </Button>
        </div>
    )
}

export default ButtonFavoriteNav