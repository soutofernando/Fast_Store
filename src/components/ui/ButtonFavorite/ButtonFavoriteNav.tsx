import { Button } from '@faststore/ui'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import Icon from '../Icon'

const ButtonFavoriteNav: FC = ({ children }) => {
    return (
        <div>
            <Link to="/favorite">
                <Button className="w-7 h-7 p-2 mr-7 content-center">
                    <Icon className='w-7 h-7 content-center' name="Plus" />
                </Button>
            </Link>
        </div>
    )
}

export default ButtonFavoriteNav