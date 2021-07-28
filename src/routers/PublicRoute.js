import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {


  return (
    <Route {...rest}
      component = { (props) => {
        ( isAuthenticated )
         ? (<Component { ...props } />)
         : (<Redirect to = "/login" /> )
      }}
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired // el componente se trabaja como funcion ya que lo que recibimos y con lo que hemos estado trabajando
                                       // ha sido con funcional components
}
