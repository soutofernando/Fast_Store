import React from 'react'
import { Button } from '@faststore/ui'
import { FC } from 'react'
import "./button_nav.scss"


const Button_Nav2: FC = ({ children }) => {
    return (
        <div>
            <Button className="font-ligth text-sm pb-2 ml-8 hover:border-b-4 pb-2 border-black bottom-1">
                {children}
            </Button>
        </div>
    )
}

export default Button_Nav2