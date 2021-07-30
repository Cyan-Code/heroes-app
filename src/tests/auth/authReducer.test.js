import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"


describe('Pruebas en authreducer', () => {

  test('Debe de retornar el estado por defecto', () => {
    const state = {
      name: 'Luis'
    }
    const demoState = authReducer(state, '')
    expect(demoState).toEqual(state)
  })

  test('Debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Luis'
      }
    }
    const demoState = authReducer({}, action)
    expect(demoState).toEqual({...action.payload, logged: true})
  })

  test('Debe de borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logout,
      payload: {
        name: 'Luis'
      }
    }
    const demoState = authReducer({name: 'luis', logged: true}, action)
    expect(demoState).toEqual({logged: false})
  })
})

