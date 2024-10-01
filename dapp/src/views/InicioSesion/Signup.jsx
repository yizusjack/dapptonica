import React, { useEffect, useRef, useState } from 'react'
import MKBox from '../../components/template/MKBox'
import LoginLayout from '../../components/LoginLayout'
import MKInput from '../../components/template/MKInput'
import MKTypography from '../../components/template/MKTypography'
import MKButton from '../../components/template/MKButton'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../contexts/ContextProvider'

export default function Signup() {

  //informacion de los campos
  const nameRef = useRef(0);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const [errors, setErrors] = useState([]);
  const {user, setUser, setToken} = useStateContext(); //agarra lo que se definio en el contexto
  const navigate = useNavigate()


  const guardar = (ev) => {
    ev.preventDefault()

    const request = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    /*console.log(request);*/

    axiosClient.post('/signup', request)
    .then(({data}) => { //las llaves son para solo acceder al data, podria tener otras cosas tambien
      setUser(data.user)
      setToken(data.token)
      console.log("Who tf do you think I am?");
      navigate('/login');
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
        <MKBox mb={2} fontWeight="light">
          <MKInput inputRef={nameRef} type="text" label="Nombre" error={"name" in errors ? true : false} fullWidth />
          {
            "name" in errors &&
            <MKTypography color="error" variant="caption" fontWeight="regular">
              {errors.name[0]}
            </MKTypography>
          }
        </MKBox>
        <MKBox mb={2}>
          <MKInput inputRef={emailRef} type="email" label="Correo electrónico" required="true" error={"email" in errors ? true : false} fullWidth/>
          {
            "email" in errors &&
            <MKTypography color="error" variant="caption" fontWeight="regular">
              {errors.email[0]}
            </MKTypography>
          }
        </MKBox>
        <MKBox mb={2}>
          <MKInput inputRef={passwordRef} type="password" label="Contraseña" required="true" error={"password" in errors ? true : false} fullWidth />
          {
            "password" in errors &&
            <MKTypography color="error" variant="caption" fontWeight="regular">
              {errors.password[0]}
            </MKTypography>
          }
        </MKBox>
        <MKBox mb={2}>
          <MKInput inputRef={passwordConfirmationRef} type="password" label="Confirmar Contraseña" required="true" fullWidth />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" type="submit" fullWidth>
            Registrarse
          </MKButton>
        </MKBox>
        <MKBox mt={3} mb={1} textAlign="center" fontWeight="light">
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
