import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'

export default function Redirect({children}) {
    const {token, setUser, setToken} = useStateContext();

    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
          // Si hay token, redirige
          navigate('/about-us'); // Reemplaza '/otra-vista' con la ruta a la que quieras redirigir
        }
      }, [token, navigate]);

  return (
    <div>
        {children}
    </div>
  )
}
