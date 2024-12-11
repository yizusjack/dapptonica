import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function NormalLayout() {

    const {user, token} = useStateContext()

    if (!token) {
        return <Navigate to="login" />
    }

    return (
        <div>
            NormalLayout
            <Outlet />
        </div>
    )
}
