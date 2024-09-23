import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import LoginLayout from '../../components/LoginLayout';
import MKBox from '../../components/template/MKBox'
import MKInput from '../../components/template/MKInput'
import MKTypography from '../../components/template/MKTypography'
import MKButton from '../../components/template/MKButton'
import { Switch } from '@mui/material'
import axiosClient from '../../axios-client';




export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  //informacion de los
  const guardar = (ev) => {
    ev.preventDefault()
    

    const request = {
      name: "Jesus",
    }

    axiosClient.post('/signup', request)
    .then(({data}) => { //las llaves son para solo acceder al data, podria tener otras cosas tambien
      console.log(data)
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) { //error de validacion
        console.log(response.data.errors);
        setErrors(response.data.errors);
      }
    })
  }

  return (
    <LoginLayout>
      
      <MKBox component="form" role="form" onSubmit={guardar}>
          <MKBox mb={2}>
            <MKInput type="email" label="Correo electrónico" fullWidth/>
          </MKBox>
          <MKBox mb={2}>
            <MKInput type="password" label="Contraseña" fullWidth />
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
