import React from 'react';
import { mount } from "enzyme"
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';


describe('Pruebas en <AppRoute>', () => {

  const contextValue = {
    dispatch: jest.fn(), //consideracion
    user: {
      logged: false
    }
  }

  test('Debe de mostrar login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value = { contextValue } >
        <AppRouter />
      </AuthContext.Provider>
    )
    expect( wrapper ).toMatchSnapshot()
  })

  test('Debe de mostrar el componente marvel si esta autenticado', () => {

    const contextValue = {
      dispatch: jest.fn(), //consideracion
      user: {
        logged: true,
        name: 'luis'
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value = { contextValue } >
        <AppRouter />
      </AuthContext.Provider>
    )
    expect( wrapper.find('.navbar').exists() ).toBe(true)
  })
})
