import React, { useContext } from 'react'
import { FireContext } from 'src/utils/FireContext/FireProvider'

const userprofile = () => {
    const { logout } = useContext(FireContext)
    return (
        <div>userprofile  <button onClick={logout}>log</button></div>
    )
}

export default userprofile