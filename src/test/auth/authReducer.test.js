import { authReducer } from "../../auth/authReducer"


describe('Pruebas en authreducer', () => {

  const state = {
    name: 'Luis',
    logged: true
  }

  test('Debe de retornar el estado por defecto', () => {
    const demoState = authReducer(state, {})
    expect(demoState).toEqual(state)
  })

  test('Debe de autenticar y colocar el name del usuario', () => {
    
  })

  test('Debe de borrar el name del usuario y logged en false', () => {
    
  })
})

