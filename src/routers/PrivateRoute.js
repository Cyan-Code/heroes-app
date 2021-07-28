import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component, // renombramiento para evitar que el componente se vea como un nodo del html normal || aqui recibo el componente
  ...rest // todos los demas atributos de los componentes como el exact o el path, van a almacenarse aqui para pasarlos a este componente
}) => {


  return (
    <Route {...rest}
      component = { (props) => { //esto es un component, que dentro de las {} tiene una callback que recibe las props del componente
        ( isAuthenticated )      // para renderizarlo de manera correcta || es como tener un componente que recibe otro en tanto la condicion se cumpla
         ? (<Component { ...props } />)
         : (<Redirect to = "/login" /> )
      }}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired // el componente se trabaja como funcion ya que lo que recibimos y con lo que hemos estado trabajando
                                       // ha sido con funcional components
}
