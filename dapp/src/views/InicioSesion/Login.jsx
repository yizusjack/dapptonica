import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import LoginLayout from '../../components/LoginLayout';
import MKBox from '../../components/template/MKBox'
import MKInput from '../../components/template/MKInput'
import MKTypography from '../../components/template/MKTypography'
import MKButton from '../../components/template/MKButton'
import { Switch } from '@mui/material'



export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <LoginLayout>
      <MKBox component="form" role="form">
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
          <MKButton variant="gradient" color="info" fullWidth>
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
