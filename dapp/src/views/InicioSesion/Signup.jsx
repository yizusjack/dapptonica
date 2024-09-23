import React, { useRef, useState } from 'react'
import MKBox from '../../components/template/MKBox'
import LoginLayout from '../../components/LoginLayout'
import MKInput from '../../components/template/MKInput'
import MKTypography from '../../components/template/MKTypography'
import MKButton from '../../components/template/MKButton'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client'

export default function Signup() {

  //informacion de los campos
  const nameRef = useRef(0);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const guardar = (ev) => {
    ev.preventDefault()

    const request = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    console.log(request);

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
          <MKInput inputRef={nameRef} type="text" label="Nombre" fullWidth onChange={handleChange} />
        </MKBox>
        <MKBox mb={2}>
          <MKInput inputRef={emailRef} type="email" label="Correo electrónico" fullWidth/>
        </MKBox>
        <MKBox mb={2}>
          <MKInput inputRef={passwordRef} type="password" label="Contraseña" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput inputRef={passwordConfirmationRef} type="password" label="Confirmar Contraseña" fullWidth />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" type="submit" fullWidth>
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
