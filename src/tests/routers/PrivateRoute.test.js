import React from 'react';
import { mount, shallow } from "enzyme"
import { PrivateRoute } from "../../routers/PrivateRoute"
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <PriveRoute />', () => {
  
  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('Debe de mostrar el componente si esta autenticadoy guardar LocalStorage', () => {
    const wrapper = mount(
    <MemoryRouter>
      <PrivateRoute
        isAuthenticated = {true}
        component = { () => { <span>Listo!!!</span>} }
        {...props}                                                       
      />
    </MemoryRouter>
    )
    expect( wrapper.find('span').exist() ).toBe(true)
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
  })

  test('Debe de bloquear el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated = {false}
          component = { () => { <span>Listo!!!</span>} }
          {...props}                                                       
        />
      </MemoryRouter>
      )
      expect( wrapper.find('span').exist() ).toBe(false)
  })
})

