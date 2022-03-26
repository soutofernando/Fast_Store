import { Button } from '@faststore/ui'
import React, { FC } from 'react'
import "./button_nav.scss"

const Button_Nav1: FC = ({ children }) => {
    return (
        <div>
            <Button className="font-extrabold ml-8 text-sm pb-2 hover:border-b-4 pb-2 border-black bottom-1">
                {children}
            </Button>
        </div>
    )
}

export default Button_Nav1