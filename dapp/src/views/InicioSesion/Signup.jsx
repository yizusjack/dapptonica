import React from 'react'
import MKBox from '../../components/template/MKBox'
import LoginLayout from '../../components/LoginLayout'
import MKInput from '../../components/template/MKInput'
import MKTypography from '../../components/template/MKTypography'
import MKButton from '../../components/template/MKButton'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <LoginLayout>
      <MKBox component="form" role="form">
        <MKBox mb={2}>
            <MKInput type="text" label="Nombre" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="email" label="Correo electrónico" fullWidth/>
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="password" label="Contraseña" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="password" label="Confirmar Contraseña" fullWidth />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" fullWidth>
            Registrarse
          </MKButton>
        </MKBox>
        <MKBox mt={3} mb={1} textAlign="center">
          <MKTypography variant="button" color="text">
            ¿Ya tienes una cuenta? {" "}
            <MKTypography
              component={Link}
              to="/login"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Inicia sesión
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </LoginLayout>
  )
}
