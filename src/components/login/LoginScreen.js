import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
// Pasamos las props que vienen del probaider del Router padre
export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext (AuthContext)

  const lastPath = localStorage.getItem('lastPath') || '/'

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'luis'
      }
    })
    history.replace(lastPath)
  }

  return (
    <div className = "container nt-5">
      <h1>Login</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick = { handleLogin }
      >
        Login
      </button>
    </div>
  )
}
