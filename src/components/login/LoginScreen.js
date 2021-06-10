import React from 'react'
// Pasamos las props que vienen del probaider del Router padre
export const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    history.push('/')
    // push vs replace
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
