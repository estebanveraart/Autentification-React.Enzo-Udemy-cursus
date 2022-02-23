import React, {useContext} from 'react'
import { UserContext } from '../../Context/UserContext'
import { Outlet, useLocation, Navigate } from 'react-router'

export default function Private() {

    const {currentUser} = useContext(UserContext)
    console.log("Private", currentUser)

    if (!currentUser) {

        return <Navigate to="/" />
        
    }

    return (
        <div className="container">
            <Outlet />
        </div>
    )
}
