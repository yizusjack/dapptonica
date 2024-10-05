import React, { useRef, useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";

import LoginLayout from '../../components/LoginLayout';
import MKBox from '../../components/template/MKBox'
import MKInput from '../../components/template/MKInput'
import MKTypography from '../../components/template/MKTypography'
import MKButton from '../../components/template/MKButton'
import { Switch } from '@mui/material'
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider'

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const {token, setUser, setToken} = useStateContext();

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      // Si hay token, redirige
      navigate('/about-us'); // Reemplaza '/otra-vista' con la ruta a la que quieras redirigir
    }
  }, [token, navigate]);

  //informacion de los
  const guardar = (ev) => {
    ev.preventDefault()
    

    const request = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    axiosClient.post('/login', request)
    .then(({data}) => { //las llaves son para solo acceder al data, podria tener otras cosas tambien
      setUser(data.user)
      setToken(data.token)
      navigate('/about-us');
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) { //error de validacion
        setErrors(response.data.errors);
      }
    })
  }

  return (
    <LoginLayout>
      
      <MKBox component="form" role="form" onSubmit={guardar}>
          <MKBox mb={2}>
            <MKInput type="email" label="Correo electrónico" inputRef={emailRef} error={"email" in errors ? true : false} fullWidth/>
            {
              "email" in errors &&
              <MKTypography color="error" variant="caption" fontWeight="regular">
                {errors.email[0]}
              </MKTypography>
            }
          </MKBox>
          <MKBox mb={2}>
            <MKInput type="password" label="Contraseña" inputRef={passwordRef} error={"password" in errors ? true : false} fullWidth />
            {
              "password" in errors &&
              <MKTypography color="error" variant="caption" fontWeight="regular">
                {errors.password[0]}
              </MKTypography>
            }
          </MKBox>
          <MKBox display="flex" alignItems="center" ml={-1}>
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <MKTypography
              variant="button"
              fontWeight="regular"
              color="text"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
              &nbsp;&nbsp;Remember me
            </MKTypography>
          </MKBox>
          <MKBox mt={4} mb={1}>
            <MKButton variant="gradient" color="info" type="submit" fullWidth>
              Iniciar sesión
            </MKButton>
          </MKBox>

        <MKBox mt={3} mb={1} textAlign="center">
          <MKTypography variant="button" color="text">
            ¿No tienes una cuenta? {" "}
            <MKTypography
              component={Link}
              to="/registro"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Regístrate
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </LoginLayout>
  )
}
